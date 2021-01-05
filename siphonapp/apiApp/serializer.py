# traslates userpage  into json
from rest_framework import serializers
from .models import UserPage
class UserPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPage
        fields =('id', 'username', 
        'siphon_to_playlist','auto_siphon_weekly',
        'disconnect_account', 
        'allow_explicit')