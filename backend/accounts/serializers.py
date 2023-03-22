from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.core.validators import EmailValidator
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, CryptoExchangeApiKey


class RegisterUserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    email = serializers.EmailField(
        validators=[EmailValidator(), UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        model = User
        fields = ["firstName", "lastName", "name", "email", "password", "token",]
        extra_kwargs = {
            "password": {"write_only": True, "min_length": 8},
        }

    def get_token(self, user) -> dict:
        token = RefreshToken.for_user(user)
        data = {"refresh": str(token), "access": str(token.access_token)}
        return data
        
    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserProfileSerializer(serializers.ModelSerializer):
    """Use this serializer to get the user profile"""

    class Meta:
        model = User
        fields = ["id","firstName", "lastName", "name", "email", "avatar", "phone_number", "address", "country", "city", "zipcode", "about", "is_public"]

    
    def update(self, instance, validated_data):
        print(instance)
        instance.firstName = validated_data.get("firstName", instance.firstName)
        instance.lastName = validated_data.get("lastName", instance.lastName)
        instance.email = validated_data.get("email", instance.email)
        instance.avatar = validated_data.get("avatar", instance.avatar)
        instance.phone_number = validated_data.get("phone_number", instance.phone_number)
        instance.address = validated_data.get("address", instance.address)
        instance.country = validated_data.get("country", instance.country)
        instance.city = validated_data.get("city", instance.city)
        instance.zipcode = validated_data.get("zipcode", instance.zipcode)
        instance.about = validated_data.get("about", instance.about)
        instance.is_public = validated_data.get("is_public", instance.is_public)
        instance.save()
        return instance


class ApiKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = CryptoExchangeApiKey
        fields = ['pk', 'exchange_name', 'public_key', 'label_name', 'created_at']
