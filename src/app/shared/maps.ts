export class Maps {

}



export interface IGeoJson {
  type: string;
  $key?: string;
}

export class GeoJson implements IGeoJson {
  type = 'Florería';
  userId: string;
  lat: number;
  long: number;
  nombre: string;
  constructor(lat, long, userId: string, nombre) {
    this.lat = lat;
    this.long = long;
    this.userId = userId;
    this.nombre = nombre;
  }
}

export class FeatureCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoJson>) { }
}

