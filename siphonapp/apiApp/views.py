from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# endpoints


def main(request):
    return HttpResponse("Hello")