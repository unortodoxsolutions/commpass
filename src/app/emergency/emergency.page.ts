import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from '../toast.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
  providers: [HoaStoreService, ToastService]
})
export class EmergencyPage implements OnInit {

      profile: any[] = [];
      estateDetails: any;
  constructor(private call: CallNumber,
              private store: HoaStoreService,
              private toast: ToastService) {
                    this.getProfile();
              }

  callEstateAuth() {
      // CALL ESTATE AUTHPRITIES
      this.call.isCallSupported().then(() => {
            // ${this.estateDetails.emergencyNumber}
            this.call.callNumber(`+2347050706655`, false).then((res) => {
                  console.log(res);
                  this.toast.showToast(res, '2000', 'bottom');
                  alert(res);
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.toast.showToast(err.message, '2000', 'bottom');
                  alert(err.message);
            });
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(err.message, '2000', 'bottom');
            alert(err.message);
      });
  }

  callAuth() {
      // CALL EMERGENCY AUTHORITIES (112 OR 911)
      this.call.isCallSupported().then(() => {
            this.call.callNumber(`+2347050706655`, false).then((res) => {
                  console.log(res);
                  this.toast.showToast(res, '2000', 'bottom');
                  alert(res);
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.toast.showToast(err.message, '2000', 'bottom');
                  alert(err.message);
            });
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(err.message, '2000', 'bottom');
            alert(err.message);
      });
  }

  getProfile() {
            let role, uid;
            role = this.store.getItem('hoa-role');
            uid = this.store.getItem('hoa-uid');
            firebase.database().ref(role).child(uid).once('value', (snapshot) => {
                  this.profile = snapshot.val();
                  this.estateDetails = this.getEstateDetails(snapshot.val().estateName);
            }).then(() => {
                  console.log('Profile retrieved successfully');
            }).catch((err: Error) => {
                  console.error(err.message);
            });
  }

  getEstateDetails(estateName: string) {
      firebase.database().ref('Estates').child(estateName).once('value', (snapshot) => {
            return snapshot.val();
      });
  }

  ngOnInit() {
      //   this.getProfile();
  }

}
