from django.urls import path
from .views import TenantLoginView,ListCreateTenantView

urlpatterns = [
    path('login/',TenantLoginView.as_view(), name='tenant-login'),
    path('list-create/',ListCreateTenantView.as_view(), name="list_create_tenant"),
]