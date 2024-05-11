import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {


  constructor(
    private mapService: MapService,
    private placesService: PlacesService) { }


  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) throw Error('No hay placesService.userLocation')


    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/dark-v12', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
    `);

    new Marker({ color: 'red'})
    .setLngLat( this.placesService.useLocation )
    .setPopup ( popup )
    .addTo ( map )

    this.mapService.setMap( map );
  }




}
