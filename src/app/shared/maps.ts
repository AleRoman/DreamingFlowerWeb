export class Maps {

}

export interface IGeometry {
    type: string;
    coordinates: number[];
}

export interface IGeoJson {
    type: string;
    geometry: IGeometry;
    properties?: any;
    $key?: string;
}

export class GeoJson implements IGeoJson {
  type = 'Feature';
  geometry: IGeometry;
  userId: string;
  constructor(coordinates, userId: string, public properties?) {
    this.geometry = {
      type: 'Point',
      coordinates: coordinates
    };
    this.userId = userId;
  }
}

export class FeatureCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoJson>) {}
}
