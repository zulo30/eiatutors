from django.urls import path

from . import views

urlpatterns = [
    # ex: /chat/
    path('', views.hello, name='hello')

]
