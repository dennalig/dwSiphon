from rest_framework import serializers
from .models import UserPage
class UserPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPage
        fields = ('id', 'username',
        'playlist_dest', 'auto_siphon',
        'allow_explicit', 'last_siphoned',
        'disconnect_account','session_name')

# new Profile -- serialize a request
class CreateUserPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPage
        fields = ('username', 'playlist_dest', 'last_siphoned')
    #create-user page , fields we want to be sent 