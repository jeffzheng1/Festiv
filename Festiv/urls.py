from django.conf.urls import patterns, include, url
from django.contrib import admin
from festiv_content import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Festiv.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),
    url(r'^hardwell', views.hardwell, name='hardwell'),
    url(r'^avicii', views.avicii, name='avicii'),
    url(r'^armin_van_buuren', views.armin_van_buuren, name='armin_van_buuren'),
    url(r'^tiesto', views.tiesto, name='tiesto'),
    url(r'^nicky_romero', views.nicky_romero, name='nicky_romero'),
    url(r'^steve_aoki', views.steve_aoki, name='steve_aoki'),
    url(r'^kaskade', views.kaskade, name='kaskade'),
    url(r'^w&w', views.wandw, name='wandw'),
    url(r'^calvin_harris', views.calvin_harris, name='calvin_harris'),
    url(r'^alesso', views.alesso, name='alesso'),
    url(r'^nervo', views.nervo, name='nervo'),
    url(r'^diplo', views.diplo, name='diplo'),
    url(r'^more', views.readmore, name='readmore'),

)
