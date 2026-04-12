from django.core.management.base import BaseCommand
from clients.models import Tenant
from django_tenants.utils import schema_context
from tenants.models import TenantUser
from clients.models import Domain

class Command(BaseCommand):
    help = 'Add a tenant with an admin user'

    def add_arguments(self, parser):
        parser.add_argument('name', type=str, help='Name of the tenant')
        parser.add_argument('domain', type=str, help='Domain for the tenant (e.g. tenant1.example.com)')
        parser.add_argument('admin_username', type=str, help='Username for the tenant admin')
        parser.add_argument('admin_password', type=str, help='Password for the tenant admin')

    def handle(self, *args, **options):
        tenant = Tenant.objects.create(name=options['name'])
        Domain.objects.create(domain=options['domain'], tenant=tenant, is_primary=True)

        with schema_context(tenant.schema_name):
            TenantUser.objects.create_user(
                username=options['admin_username'],
                password=options['admin_password'],
                email='admin@{}.com'.format(tenant.slug),
                full_name='{} Admin'.format(tenant.name),
                role='admin',
            )
        self.stdout.write(self.style.SUCCESS('Successfully created tenant "{}" with admin user "{}"'.format(tenant.name, options['admin_username'])))