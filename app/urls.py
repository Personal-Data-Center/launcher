from django.urls import path

from . import views
from . import api

urlpatterns = [
    path('', views.index, name='index'),
    path('api/listservices', api.ListServices.as_view(), name='list_services'),
    path('api/listnews', api.ListNews.as_view(), name='list_news'),
]
