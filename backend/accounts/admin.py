from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext as _
from .models import User, CryptoExchangeApiKey


class CustomUserAdmin(UserAdmin):
    """Define admin model for custom User model with no username field."""

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "firstName",
                    "lastName",
                    "name",
                    "avatar",
                    "email",
                    'password'
                )
            },
        ),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "id"
                    "firstName",
                    "lastName",
                    "name",
                    "email",
                    "is_staff",
                    "password1",
                    "password2",
                ),
            },
        ),
    )

    list_display = (
       "firstName",
       "lastName",
       "name",
        "email",
        "is_staff",
        "is_active",
        "is_superuser",
    )
    search_fields = ("id", "name", "email")
    ordering = ("id",)
    list_filter = (
        "is_active",
        "is_staff",
        "is_superuser",
    )


admin.site.register(User, CustomUserAdmin)
admin.site.register(CryptoExchangeApiKey)