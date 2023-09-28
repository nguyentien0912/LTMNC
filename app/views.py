from django.shortcuts import render, redirect
from django.http import HttpResponse
# Create your views here.

def login(request):
    context = {}
    return render(request,'app/login.html',context)
def home(request):
    context = {}
    return render(request,'app/home.html',context)
def signup(request):
    context = {}
    return render(request,'app/signup.html',context)
