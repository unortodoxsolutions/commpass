import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class HoaStoreService {

  constructor(private platform: Platform,
              private store: NativeStorage) { }

  setItem(key: string, value: string) {
      if (this.platform.is('mobile')) {
            // alert(this.platform.platforms()[0]);
            window.localStorage.setItem(key, value); // REMOVE BEFORE BUILD
            // this.store.setItem(key, value).then(() => {
            //       console.log(`${key.toUpperCase} SAVED`);
            // }, (err) => {
            //       // alert(err);
            // }).catch((err: Error) => {
            //       // alert(err.message);
            // });
      } else if (this.platform.is('mobileweb')) {
            // alert('Platform is not native');
            window.localStorage.setItem(key, value);
      } else {
            // alert('Not running on browser or native device');
            window.localStorage.setItem(key, value);
      }
  }

  getItem(key: string) {
      if (this.platform.is('mobile')) {
            // alert('Platform is native');
            return window.localStorage.getItem(key); // REMOVE BEFORE BUILD
            // return this.store.getItem(key).then(() => {
            //       console.log(`${key.toUpperCase} SAVED`);
            // }, (err) => {
            //       // alert(err);
            // }).catch((err: Error) => {
            //       // alert(err.message);
            // });
      } else if (this.platform.is('mobileweb')) {
            // alert('Platform is not native');
            return window.localStorage.getItem(key);
      } else {
            // alert('Not running on browser or native device');
            return window.localStorage.getItem(key);
      }
      // return this.store.getItem(key);
  }

  clearStore() {
      if (this.platform.is('mobile')) {
            // alert('Platform is native');
            window.localStorage.removeItem('hoa-uid');
            window.localStorage.removeItem('hoa-role'); // REMOVE BEFORE BUILD
            // return this.store.getItem(key).then(() => {
            //       console.log(`${key.toUpperCase} SAVED`);
            // }, (err) => {
            //       // alert(err);
            // }).catch((err: Error) => {
            //       // alert(err.message);
            // });
      } else if (this.platform.is('mobileweb')) {
            // alert('Platform is not native');
            window.localStorage.removeItem('hoa-uid');
            window.localStorage.removeItem('hoa-role');
      } else {
            // alert('Not running on browser or native device');
            window.localStorage.removeItem('hoa-uid');
            window.localStorage.removeItem('hoa-role');
      }
  }
}
