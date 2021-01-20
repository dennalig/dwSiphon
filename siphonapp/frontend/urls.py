from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('user', index),
    path('about', index),
    path('api/', include('API.urls')) #include from frontend
]