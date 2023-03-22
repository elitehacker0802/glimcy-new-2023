from .models import User, CryptoExchangeApiKey
from rest_framework import generics
from rest_framework import permissions
from rest_framework import decorators
from rest_framework.response import Response
from .serializers import RegisterUserSerializer, UserProfileSerializer, ApiKeySerializer
from rest_framework.throttling import UserRateThrottle
from rest_framework import status
# import ValidationError from rest_framework.exceptions
from django.contrib.auth.hashers import make_password
from django.db import IntegrityError

logger = __import__("logging").getLogger(__name__)

@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.AllowAny])
def register(request):
    """Вьюсет для регистрации пользователя."""
    data=request.data
    try:
        user, _created = User.objects.get_or_create(
            firstName=data['firstName'],
            lastName=data['lastName'],
            email=data['email'],
            password=make_password(data['password'])
        )
    except IntegrityError:
        return Response(
            {
                'message':
                'Пользователь с такой почтой уже существует.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )
    serializer = RegisterUserSerializer(user, many=False)
    return Response(
        data=serializer.data,
        status=status.HTTP_200_OK
    )
        
    
    
    # def get_token(self, user):
    #     token = RefreshToken.for_user(user)
    #     data = {"refresh": str(token), "access": str(token.access_token)}
    #     return data

class UserProfileView(generics.RetrieveUpdateAPIView):
    """Get and update user profile"""

    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    throttle_classes = [UserRateThrottle]
    

    def get_object(self):
        return self.request.user

class ApiKeyList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ApiKeySerializer
    
    def get_queryset(self):
        user = self.request.user
        return CryptoExchangeApiKey.objects.filter(user=user)


class UserInfoList(generics.ListCreateAPIView):
        queryset = User.objects.all()
        serializer_class = UserProfileSerializer
        
class UserInfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer