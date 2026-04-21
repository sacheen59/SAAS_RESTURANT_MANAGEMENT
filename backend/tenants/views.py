from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination
from tenants.serializers import TenantLoginSerializer
from rest_framework.generics import ListCreateAPIView,CreateAPIView

from tenants.serializers import CreateTenantSerializer, ListTenantSerializer
from clients.models import Tenant
from tenants.permissions import IsSuperAdmin
from utils.pagination import TenantPagination

class TenantLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = TenantLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.validated_data, status=200)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)



class ListCreateTenantView(ListCreateAPIView):
    queryset = Tenant.objects.all().order_by("-created_at")
    permission_classes = [IsSuperAdmin]
    pagination_class = TenantPagination

    def get_queryset(self):
        queryset = super().get_queryset()
        status_filter = self.request.query_params.get("status")
        if status_filter and status_filter.lower() != "all":
            queryset = queryset.filter(status__iexact=status_filter)
        return queryset

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ListTenantSerializer
        return CreateTenantSerializer

