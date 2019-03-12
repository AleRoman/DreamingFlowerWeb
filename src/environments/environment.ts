// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  config : {
    apiKey: 'AIzaSyCHqXip-q8GwKG4e_H3iyFmLlXAZ6c9sTI',
    authDomain: 'dreamflowers-65edb.firebaseapp.com',
    databaseURL: 'https://dreamflowers-65edb.firebaseio.com',
    projectId: 'dreamflowers-65edb',
    storageBucket: 'dreamflowers-65edb.appspot.com',
    messagingSenderId: '681540908298'
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoianV2YWxlIiwiYSI6ImNqdDNoZjRscjJrZ2g0YW9kMnVzeTRqMTAifQ.815LLYJaE9rHqLJpHfZZCw'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
