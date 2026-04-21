from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from tenants.serializers import TenantLoginSerializer
from rest_framework.generics import ListCreateAPIView,CreateAPIView

from tenants.serializers import CreateTenantSerializer, ListTenantSerializer
from clients.models import Tenant
from tenants.permissions import IsSuperAdmin

class TenantLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = TenantLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.validated_data, status=200)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


class ListCreateTenantView(ListCreateAPIView):
    queryset = Tenant.objects.all()
    permission_classes = [IsSuperAdmin]

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ListTenantSerializer
        return CreateTenantSerializer

