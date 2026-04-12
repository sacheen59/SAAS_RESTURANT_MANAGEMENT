from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from tenants.serializers import TenantLoginSerializer

class TenantLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = TenantLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.validated_data, status=200)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)