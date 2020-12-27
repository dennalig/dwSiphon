from django.db import models
import sys 
import string 
# Create your models here.

#in a standard db you'd have tables and rows
# we also will but we will be having models instead.


#what the user can see and change when deciding how to get discover weekly content
class StatusPage(models.Model):
    siphon = models.BooleanField(null=False, default=False) # button/ command to pull from discover weekly
    automatic_siphon_weekly = models.BooleanField(null=False, default=False) # toggle to automatically pull each week
    playlist_destination = models.CharField(max_length=sys.maxsize, default="", unique=True) # requires a string for a new playlist name or a name of 
    #and already existing playlist 

    username = models.CharField(max_length=sys.maxsize, default="", unique=True) # requires a string for a new playlist name or a name of 

    gather_explicit = models.BooleanField(null=True, default=True) # toggle to allow explicit songs or not 
    disonnect_spotify = models.BooleanField(null=False, default=False) # button to disconnect account from app

    gathered_as_of = models.DateField(auto_now_add=True) # date indication of when the last group of songs was gathered

    

    list_change = models.BooleanField(null=False,default=False) # detect when songs were changed 


# put most of your logic in your models
