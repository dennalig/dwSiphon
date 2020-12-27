#made file for urls inside the api app


from django.urls import path
from .views import StatusPageView

#used to dispatch urls
urlpatterns = [

    path('userpage', StatusPageView.as_view())

]