from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from dj_rest_auth.views import PasswordResetView, PasswordResetConfirmView
from .views import  UserProfileView, ApiKeyList, UserInfoList, UserInfoDetail, register

urlpatterns = [
    path('register/', register, name='register'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path("login/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("profile/", UserProfileView.as_view(), name="user_profile"),
    path('profiles/', UserInfoList.as_view()),
    path('profiles/<str:pk>/', UserInfoDetail.as_view()),
    path("profile/api-keys", ApiKeyList.as_view(), name="user_api_keys"),
]
