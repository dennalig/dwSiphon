from django.shortcuts import render
from rest_framework import generics
from .serializer import UserPageSerializer
from .models import UserPage
# Create your views here.

# endpoints

# already setup to return to use, all of the userPage objects 
# generics.CreateAPIView 
class UserPageView(generics.ListAPIView):
    queryset = UserPage.objects.all()
    serializer_class = UserPageSerializer