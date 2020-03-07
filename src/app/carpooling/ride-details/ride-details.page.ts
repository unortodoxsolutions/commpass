import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HoaStoreService } from '../../hoa-store.service';
import { ToastService } from '../../toast.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.page.html',
  styleUrls: ['./ride-details.page.scss'],
  providers: [
        HoaStoreService,
        ToastService
      ]
})
export class RideDetailsPage implements OnInit {
      ride: any;
      role: any;
      uid: any;
      profile: any;
      loading = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: HoaStoreService,
              private toast: ToastService) {
                  // GET RIDE DETAILS
                  this.getRide();
                  this.getUserInfo();
}

requestRide() {
      this.loading = true;
      const data = {
            notifType: 'rideRequest',
            from: this.profile.fullname,
            requestedBy: this.uid,
            message: `${this.profile.fullname} requests a ride from you.`,
            sentAt: Date.now(),
      };
      // SEND REQUEST NOTIFICATION TO CAR OWNER' /notifications ROUTE
      firebase.database().ref(`${this.ride.offeredBy.role}/${this.ride.offeredBy.uid}`).child('notifications').push(data)
            .then((newNotification) => {
                  console.log('Request successfully made');
                  this.toast.showToast('Request Successfully Made', '2000', 'bottom');
                  this.loading = false;
                  // ADD NOTIFICATION KEY TO NOTIFICATION DATA
                  // tslint:disable-next-line:max-line-length
                  firebase.database().ref(`${this.ride.offeredBy.role}/${this.ride.offeredBy.uid}/notifications/${newNotification.key}`).update({
                        key: newNotification.key
                  });
            }, (err) => {
                  console.error(err);
                  this.loading = false;
                  this.toast.showToast('Could Not Make Request. Try Again Later', '4000', 'bottom');
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.loading = false;
                  this.toast.showToast(err.message, '4000', 'bottom');
            });
}

getRide() {
      this.route.paramMap.subscribe((params) => {
            this.ride = JSON.parse(params.get('ride'));
      });
}

getUserInfo() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
      firebase.database().ref(`${this.role}/${this.uid}`).once('value', (userProfile) => {
            this.profile = userProfile.val();
      }, (err) => {
            console.error(err);
      }).catch((err: Error) => {
            console.error(err.message);
      });
}
  ngOnInit() {
  }

}
