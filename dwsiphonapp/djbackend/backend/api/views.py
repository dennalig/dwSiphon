from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import StatusPage
from .serializers import StatusPageSerializer
# Create your views here.
#where we write our endpoints


class StatusPageView(generics.ListAPIView):
    queryset = StatusPage.objects.all()
    serializer_class = StatusPageSerializer


# def main(request):
#     #returns a response
#     return HttpResponse("<h1>Hello</h1>")


    #important cmds
    # python manage.py makemigrations
    # python manage.py migrate 
    #django-admin startapp <appname>
    # django-admin startapp <appname>