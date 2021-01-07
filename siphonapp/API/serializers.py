from rest_framework import serializers
from .models import UserPage
class UserPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPage
        fields = ('id', 'username',
        'playlist_dest', 'auto_siphon',
        'allow_explicit', 'disconnect_account')