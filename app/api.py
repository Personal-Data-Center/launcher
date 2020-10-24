from django.shortcuts import render
from django.http import HttpResponse, request, HttpResponseRedirect
from pdc.helpers.login import auth
from pdc import settings
from rest_framework.views import APIView
from rest_framework.response import Response
import json
import requests
import ast

# Create your views here.

class ListServices(APIView):

    def get(self, request):
        session_token = request.COOKIES.get('authorizator_session')
        if auth.Api.pdcLoginCheck(session_token):
            cookie = {"authorizator_session" : session_token}
            r = requests.get("http://system/system/api/list/?only_visible=true", cookies=cookie)
            content = json.loads(r.text)
        else:
            content = {'error': 'auth failed'}
        return Response(content)

class ListNews(APIView):

    def get(self, request):
        session_token = request.COOKIES.get('authorizator_session')
        if auth.Api.pdcLoginCheck(session_token):
            news = '{ "news" : [{ \
            "text": "Welcome to your personal cloud", \
            "image": "/static/img/default_news.jpg", \
            "link": "/"}]}'
            content = json.loads(news)
        else:
            content = {'error': 'auth failed'}
        return Response(content)
