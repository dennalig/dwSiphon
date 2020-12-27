# made serializer class 

# it will take our model.. 
# and translate it into a json response

from rest_framework import serializers
from .models import StatusPage
class StatusPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusPage
        fields = ('id', 'automatic_siphon_weekly', 'playlist_destination', 'username',
         'gather_explicit', 'gathered_as_of', 'list_change')