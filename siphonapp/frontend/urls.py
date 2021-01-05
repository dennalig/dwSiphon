
from django.urls import path
from .views import index

#siphonapp endpoints 
urlpatterns = [
    path('', index)
]
