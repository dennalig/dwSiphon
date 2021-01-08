from django.db import models


def create_playlist(name):
    name=name

# Create your models here.
class UserPage (models.Model):
    username = models.CharField(max_length=1000, default="", unique=True)
    playlist_dest = models.CharField(max_length=1000, default="", unique=True)
    auto_siphon = models.BooleanField(null=True, default=True)
    allow_explicit = models.BooleanField(null=False, default=False)
    disconnect_account =models.BooleanField(null=True, default=True)
    session_name = models.CharField(max_length=1000, default="", unique=True) #session key value 