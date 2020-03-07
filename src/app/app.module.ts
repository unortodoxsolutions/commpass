import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps, Geocoder } from '@ionic-native/google-maps';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { HoaStoreService } from './hoa-store.service';

import { ComponentsModule } from './components/components.module';

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule,
    IonicStorageModule.forRoot({
      name: '__hoa',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    GooglePlaceModule
  ],
  providers: [
        HoaStoreService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Toast,
    NativeStorage,
    CallNumber,
    Contacts,
    SocialSharing,
    ImagePicker,
    Geolocation,
    GoogleMaps,
    Geocoder,
    NativeGeocoder
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
