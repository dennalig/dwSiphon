from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserPageSerializer, CreateUserPageSerializer
from .models import UserPage
# Create your views here.

from rest_framework.views import APIView 
from rest_framework.response import Response

class UserPageView(generics.CreateAPIView):
    querysey = UserPage.objects.all()
    serializer_class = UserPageSerializer

class CreateUserPageView(APIView):
    serializer_class = CreateUserPageSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
            #exists ! 

        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            playlist_dest = serializer.data.get('playlist_dest')
            last_siphoned = serializer.data.get('last_siphoned')
            session_name = self.request.session.session_key
            quesryset = UserPage.objects.filter(username=username)
            if quesryset.exists(): #checking if it exists
                userpage =quesryset[0]
                userpage.username = username
                userpage.playlist_dest = playlist_dest
                userpage.save(update_fields=['playlist_dest', 'auto_siphon', "last_siphoned"
                            'allow_explicit'])
                return Response(UserPageSerializer(userpage).data, 
                status = status.HTTP_200_OK)
            else: #if it does not exist, we apply the values of the new userpage to that of what is passed in 
                userpage = UserPage(username= username, playlist_dest= playlist_dest, last_siphoned=last_siphoned,
                session_name=session_name)
                userpage.save()
                return Response(UserPageSerializer(userpage).data, status=status.HTTP_201_CREATED)

            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
            
            #session keys!