// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBvvANIPKekcXKnZ5rTX7JOFPZCtppTioY',
  API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBvvANIPKekcXKnZ5rTX7JOFPZCtppTioY',
  firebase: {
      apiKey: 'AIzaSyBe2cWiO-JkUz_7gIOKX6g0lMD1Gp2v8kU',
      authDomain: 'h-o-a-9bb7b.firebaseapp.com',
      databaseURL: 'https://h-o-a-9bb7b.firebaseio.com',
      projectId: 'h-o-a-9bb7b',
      storageBucket: 'h-o-a-9bb7b.appspot.com',
      messagingSenderId: '647365398931',
      appId: '1:647365398931:web:12fe07231ed6872d041866',
      measurementId: 'G-WKD0BD29NR'
//     apiKey: 'AIzaSyC5QK355uuknu0_ldVxFqqNqgp9oJi_eLc',
//     authDomain: 'ion4fullpwa.firebaseapp.com',
//     databaseURL: 'https://ion4fullpwa.firebaseio.com',
//     projectId: 'ion4fullpwa',
//     storageBucket: 'ion4fullpwa.appspot.com',
//     messagingSenderId: '813357714189'
    // apiKey: 'AIzaSyCgrWOAJdIpE98-irq_o4DIkcoc47jiytY',
    // authDomain: 'dev-ion4fullpwa.firebaseapp.com',
    // databaseURL: 'https://dev-ion4fullpwa.firebaseio.com',
    // projectId: 'dev-ion4fullpwa',
    // storageBucket: 'dev-ion4fullpwa.appspot.com',
    // messagingSenderId: '110862065236'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
