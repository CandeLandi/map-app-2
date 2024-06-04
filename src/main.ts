import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environments';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiY2FuZGVsYW5kaSIsImEiOiJjbHYzdjBoOXMwMjNvMnFsbzU1cm5rajJqIn0.Px4Id25nBBgFsGE-0dXIVA';


if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
