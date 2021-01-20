from django.urls import path
from .views import UserPageView , CreateUserPageView

urlpatterns = [
    path('home', UserPageView.as_view()),
    path('create-pref', CreateUserPageView.as_view())
    

]
