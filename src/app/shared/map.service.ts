import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Maps, GeoJson} from './maps';

import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }


  getMarkers(): AngularFireList<any> {
    return this.db.list('/florerias');
  }

  createMarker(data: GeoJson) {
    return this.db.list('/florerias')
                  .push(data);
  }

  removeMarker($key: string) {
    return this.db.object('/florerias/' + $key).remove();
  }

}
