from django.shortcuts import render
from rest_framework import generics
from .serializers import UserPageSerializer
from .models import UserPage
# Create your views here.

class UserPageView(generics.CreateAPIView):
    querysey = UserPage.objects.all()
    serializer_class = UserPageSerializer