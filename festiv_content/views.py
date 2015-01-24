from django.shortcuts import render, render_to_response
from django.template.context import RequestContext

def index(request): 
    return render_to_response('festiv_pages/index.html', context_instance=RequestContext(request))

def hardwell(request): 
    return render_to_response('festiv_pages/artist_pages/hardwell_page.html', context_instance=RequestContext(request))

def avicii(request): 
    return render_to_response('festiv_pages/artist_pages/avicii_page.html', context_instance=RequestContext(request))

def armin_van_buuren(request): 
    return render_to_response('festiv_pages/artist_pages/armin_van_buuren_page.html', context_instance=RequestContext(request))

def tiesto(request): 
    return render_to_response('festiv_pages/artist_pages/tiesto_page.html', context_instance=RequestContext(request))

def nicky_romero(request): 
    return render_to_response('festiv_pages/artist_pages/nicky_romero_page.html', context_instance=RequestContext(request))

def steve_aoki(request): 
    return render_to_response('festiv_pages/artist_pages/steve_aoki_page.html', context_instance=RequestContext(request))

def kaskade(request): 
    return render_to_response('festiv_pages/artist_pages/kaskade_page.html', context_instance=RequestContext(request))

def wandw(request): 
    return render_to_response('festiv_pages/artist_pages/w&w_page.html', context_instance=RequestContext(request))

def calvin_harris(request): 
    return render_to_response('festiv_pages/artist_pages/calvin_harris_page.html', context_instance=RequestContext(request))

def alesso(request): 
    return render_to_response('festiv_pages/artist_pages/alesso_page.html', context_instance=RequestContext(request))

def nervo(request): 
    return render_to_response('festiv_pages/artist_pages/nervo_page.html', context_instance=RequestContext(request))

def diplo(request): 
    return render_to_response('festiv_pages/artist_pages/diplo_page.html', context_instance=RequestContext(request))

def readmore(request): 
    return render_to_response('festiv_pages/artist_pages/readmore.html', context_instance=RequestContext(request))
