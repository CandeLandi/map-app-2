import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiY2FuZGVsYW5kaSIsImEiOiJjbHYzdWRqeGUwMXpqMmxwMXVpbTZoaTY0In0.yultRG7jGwv8Qg7obV_QDw';


if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation')
  throw new Error('Navegador no soporta la Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
