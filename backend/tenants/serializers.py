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