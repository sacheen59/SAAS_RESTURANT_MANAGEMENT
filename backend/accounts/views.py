from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from accounts.serializers import SuperAdminLoginSerializer


class SuperAdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        serializer = SuperAdminLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.validated_data, status=200)
        return Response(serializer.errors, status=401)
