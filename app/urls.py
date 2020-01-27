from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    # ex: /
    path('', views.IndexView.as_view(), name='Home'),
]
