from django.db import models
import string
# Create your models here.
#database model/table...
# it will interpret python code and create db based on that 

def connect_to_user(name):
    username=name

#model for the user page 
class UserPage(models.Model):
    #username
    username = models.CharField(max_length=10000, default="", 
         unique=True)
    #playlist_Destination
    siphon_to_playlist = models.CharField(max_length=1000, default="", unique=True)
    # toggle automatic siphoning
    auto_siphon_weekly = models.BooleanField(null=False, default=False)
    #button to disconnect
    disconnect_account = models.BooleanField(null=False, default=False)
    #explicit songs
    allow_explicit = models.BooleanField(null=True,default=True)
#put most logic on models 
