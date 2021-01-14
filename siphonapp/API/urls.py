from django.urls import path
from .views import UserPageView , CreateUserPageView

urlpatterns = [
    path('home', UserPageView.as_view()),
    path('userpref',CreateUserPageView.as_view())

]
