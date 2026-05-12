from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 0.8
    changefreq = 'monthly'

    def items(self):
        return [
            'home',
            'index',
            'servicios',
            'diseño_web',
            'planes',
            'nosotros',
        ]

    def location(self, item):
        return reverse(item)

