import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../../shared/map.service';
import { GeoJson, FeatureCollection } from '../../../shared/maps';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit {

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Florería';

  // data
  source: any;
  markers: GeoJson[];
  userId: string;
  constructor(private mapService: MapService,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    const m = this.mapService.getMarkers();
    m.snapshotChanges().subscribe(data => {
      this.markers = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.markers.push(a as GeoJson);
      });
    });

    this.initializeMap();

  }

  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        });
      });
    }

    this.buildMap();

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });


    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat];
      const lat = event.lngLat.lat;
      const long = event.lngLat.lng;
      this.afAuth.authState.subscribe(user => {
        this.userId = user.uid;
        const newMarker = new GeoJson(lat, long, this.userId, this.message);
        this.mapService.createMarker(newMarker);
      });
    });

    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      /// register source
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      /// get source
      this.source = this.map.getSource('firebase');



      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      });

    });

  }

  /// Helpers

  removeMarker(marker) {
    this.mapService.removeMarker(marker.$key);
  }

  flyTo(lon: number[]) {
    console.log(lon);
    this.map.flyTo({
      center: lon
    });
  }

  markerUserId(userId) {
    this.afAuth.authState.subscribe(user => {
      this.userId = user.uid;
      if (userId === this.userId) {
        return true;
      }
    });
  }


}
