from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {'current_page': 'index'})

def servicios(request):
    return render(request, 'servicios.html', {'current_page': 'servicios'})

def diseno_web(request):
    return render(request, 'diseño_web.html', {'current_page': 'diseño_web'})

def nosotros(request):
    return render(request, 'nosotros.html', {'current_page': 'nosotros'})

