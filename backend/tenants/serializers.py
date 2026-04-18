from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from django_tenants.utils import schema_context

from clients.models import Tenant, Domain
from .models import TenantUser

class TenantLoginSerializer(serializers.Serializer):
    domain = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        domain = attrs['domain'].split(':')[0].split('.')[0]
        try:
            domain_obj = Domain.objects.select_related('tenant').get(domain=domain)
            tenant = domain_obj.tenant
        except Domain.DoesNotExist:
            raise serializers.ValidationError('Invalid domain.')

        if not tenant.is_active:
            raise serializers.ValidationError('Tenant account is inactive.')

        # authenticate inside tenant schema
        with schema_context(tenant.schema_name):
            try:
                user = TenantUser.objects.get(username=attrs['username'], is_active=True)
            except TenantUser.DoesNotExist:
                raise serializers.ValidationError('Invalid username or password.')

            if not user.check_password(attrs['password']):
                raise serializers.ValidationError('Invalid username or password.')

            # build jwt with tenant + role info
            refresh = RefreshToken()
            refresh['user_id']       = user.id
            refresh['username']      = user.username
            refresh['role']          = user.role
            refresh['tenant_schema'] = tenant.schema_name
            refresh['tenant_slug']   = tenant.slug
            refresh['tenant_name']   = tenant.name
            refresh['token_type']    = 'tenant'


        return {
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'username': user.username,
            'role': user.role,
            'tenant_schema': tenant.schema_name,
            'tenant_slug': tenant.slug,
        }


class CreateTenantSerializer(serializers.Serializer):
    tenant_name = serializers.CharField()
    tenant_status = serializers.CharField()
    schema_name = serializers.CharField()
    slug = serializers.CharField()
    domain = serializers.CharField()
    is_primary = serializers.BooleanField(default=True)
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        tenant_name = attrs.get('tenant_name')
        domain = attrs.get('domain')

        if Tenant.objects.filter(name=tenant_name).exists():
            raise serializers.ValidationError("The Client name already exists.")

        if Domain.objects.filter(domain=domain).exists():
            raise serializers.ValidationError("This Domain alreay exists.")
        return {
            "tenant_data" : {
                "tenant_name": tenant_name,
                "tenant_status": attrs.get('tenant_status'),
                "schema_name": attrs.get('schema_name'),
                "slug": attrs.get('slug')
            },
            "domain_data": {
                "domain" : domain,
                "is_primary": attrs.get('is_primary')
            },
            "adminstrative_data": {
                "username": attrs.get('username'),
                'password': attrs.get('password')
            }
        }

    def create(self, validated_data):
        tenant_data = validated_data.get('tenant_data')
        domain_data = validated_data.get('domain_data')
        administrative_data = validated_data.get('administrative_data')

        tenant = Tenant.objects.create(
            name=tenant_data['tenant_name'],
            schema_name=tenant_data['schema_name'],
            status=tenant_data['tenant_status'],
            slug=tenant_data['slug'],
        )
        # create domain
        Domain.objects.create(
            domain = domain_data["domain"],
            is_primary = domain_data['is_primary'],
            tenant = tenant
        )
        # create the admin at the same time
        tenant_user = TenantUser.objects.create(
            username=administrative_data['username'],
            role= 'admin'
        )
        tenant_user.set_password(administrative_data["password"])
        tenant_user.save()

        return tenant