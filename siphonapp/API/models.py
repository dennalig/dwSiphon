from django.db import models
from datetime import datetime

def create_playlist(name):
    name=name

# Create your models here.
class UserPage (models.Model):
    username = models.CharField(max_length=1000, default="", unique=True) # username
    playlist_dest = models.CharField(max_length=1000, default="", unique=True) #playlist destination
    auto_siphon = models.BooleanField(null=True, default=True) # automatically siphon each week
    allow_explicit = models.BooleanField(null=False, default=False) #allow Explicit songs
    last_siphoned = models.DateTimeField(default=datetime.now(), blank=True) #date as to when last pulled from spotify (uses Models.DateTimeField)
    disconnect_account =models.BooleanField(null=True, default=True) # disconnect value
    session_name = models.CharField(max_length=1000, default="", unique=True) #session key value 