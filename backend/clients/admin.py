from django.contrib import admin
from .models import Tenant, Domain

@admin.register(Tenant)
class TenantAdmin(admin.ModelAdmin):
    list_display = ['name', 'schema_name', 'slug', 'is_active','status']
    prepopulated_fields = {
        "slug": ('schema_name',)
    }
    list_editable = ['status', 'is_active']

admin.site.register(Domain)