#store all of urls


from django.urls import path
from .views import UserPageView

urlpatterns = [
    path('home', UserPageView.as_view()),
    
]
