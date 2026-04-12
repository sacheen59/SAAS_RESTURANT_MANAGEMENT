from django.contrib import admin
from django.contrib.admin import AdminSite
from .models import TenantUser

class TenantAdminSite(AdminSite):
    site_header = 'Tenant Admin'

    def has_permission(self, request):
        return request.user.is_authenticated and getattr(request.user, 'role', None) == 'admin'

tenant_admin_site = TenantAdminSite(name='tenant_admin')

@admin.register(TenantUser, site=tenant_admin_site)
class TenantAdmin(admin.ModelAdmin):
    list_display = ['username','full_name','role','is_active']
    search_fields = ['username','full_name']
