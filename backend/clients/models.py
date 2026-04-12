from django.db import models
from django.utils.text import slugify
from django_tenants.models import TenantMixin, DomainMixin

from utils.common_model import TimestampedModel


class Tenant(TenantMixin):
    STATUS = (
        ('trial', 'Trial'),
        ('active', 'Active'),
        ('suspended', 'Suspended')
    )
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    is_active = models.BooleanField(default=True)
    status = models.CharField(choices=STATUS, default='trial')

    auto_create_schema = True
    auto_drop_schema = True

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        if not self.schema_name:
            self.schema_name = self.slug.replace('-', '_')
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Domain(DomainMixin):
    pass