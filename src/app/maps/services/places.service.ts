import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];  // | undefined | = undefined

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
    // ! uno solo niega que hay un valor y !! y dos niega que no hay un valor (nirga la negacion) asique seria true,
  }

  constructor() { }



   public async getUserLocation(): Promise<[number, number]> {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          reject();
        }
      );


    });

  }
}








