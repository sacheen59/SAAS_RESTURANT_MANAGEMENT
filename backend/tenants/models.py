from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from utils.common_model import TimestampedModel
from clients.models import Tenant

class TenantUserManager(BaseUserManager):
    def create_user(self,username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

# Create your models here.
class TenantUser(AbstractBaseUser,TimestampedModel):
    """
    Lives inside each tenant schema, completely isolated from other tenants.
    """
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('waiter', 'Waiter'),
        ('customer', 'Customer'),
        ('kitchen', 'Kitchen')
    )
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(blank=True)
    full_name = models.CharField(max_length=255, null=True, blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')
    is_active = models.BooleanField(default=True)


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'full_name']

    objects = TenantUserManager()

    class Meta:
        db_table = 'tenants_tenantuser'

    def __str__(self):
        return self.username

    @property
    def is_tenant_admin(self):
        return self.role == 'admin'



