import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from '../toast.service';
import { AlertService } from '../alert.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-book-group',
  templateUrl: './book-group.page.html',
  styleUrls: ['./book-group.page.scss'],
  providers: [HoaStoreService, ToastService, AlertService]
})
export class BookGroupPage implements OnInit {

      guests: any[] = [];
      profile: any;
      dependentOn: any;
      fullname;
      phone;
      gender;
      reason;
      vehicleMake;
      vehicleRegNum;
      vehicleColor;
      comments;
      addingGuest = false;
      isLoading = false;
      isConfirmed = false;
      guestCode = 0;
      location: any = '';
      guestForm: FormGroup;

      validation_messages = {
            'name': [
                  { type: 'required', message: 'Guest name is required.' }
            ],
            'phone': [
                  { type: 'required', message: 'Guest phone number is required' }
            ],
            'gender': [
                  { type: 'required', message: 'Please specify a gender' }
            ],
            'reason': [
                  { type: 'required', message: 'Please specify a gender' }
            ]
          };
  constructor(private store: HoaStoreService,
              private toast: ToastService,
              private alert: AlertService,
              private router: Router,
              private socialSharing: SocialSharing,
              private geoLocation: Geolocation) {
                    this.getProfile();
                    this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        //   INIT FORM
        this.guestForm = new FormGroup({
            'name': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'phone': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'gender': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'reason': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            // 'vehicleMake': new FormControl('', Validators.compose([
            //       Validators.required
            // ])),
            // 'vehicleRegNum': new FormControl('', Validators.compose([
            //       Validators.required
            // ])),
            // 'vehicleColor': new FormControl('', Validators.compose([
            //       Validators.required
            // ])),
            // 'comments': new FormControl('', Validators.compose([
            //       Validators.required
            // ])),
            // 'isConfirmed': new FormControl(true)
        });
               }

  addGuest() {
      this.addingGuest = true;
      const guest = {
            fullname: this.fullname,
            phone: this.phone,
            gender: this.gender,
            // vehicleMake: this.vehicleMake,
            // vehicleRegNum: this.vehicleRegNum,
            // vehicleColor: this.vehicleColor,
            // comments: this.comments
      };
      this.guests.push(guest);
      this.resetInputs();
      this.addingGuest = false;
  }

  resetInputs() {
      this.fullname = '';
      this.phone = '';
      this.gender = '';
      // this.vehicleMake = '';
      // this.vehicleRegNum = '';
      // this.vehicleColor = '';
      // this.comments = '';
  }

  bookGroupGuests() {
      // BOOK ALL GUESTS
      // ASK HOW TO DISPLAY GROUP GUESTS
      this.isLoading = true;
      // ADD GUEST TO USER'S GUESTS ROUTE
      const uid = this.store.getItem('hoa-uid');
      const role = this.store.getItem('hoa-role');
      const date = Date.now();
      let data;
      // console
      let confirmed;

      if (this.isConfirmed) {
            // confirmed = new Date();
            data = {
                  // fullname: this.guestForm.get('name').value,
                  // phone: this.guestForm.get('phone').value,
                  // gender: this.guestForm.get('gender').value,
                  // vehicleMake: this.guestForm.get('vehicleMake').value,
                  // vehicleRegNum: this.guestForm.get('vehicleRegNum').value,
                  // vehicleColor: this.guestForm.get('vehicleColor').value,
                  // comments: this.guestForm.get('comments').value,
                  guest: this.guests,
                  confirmed: date,
                  status: 'Confirmed',
                  bookedAt: date,
                  bookedBy: uid,
                  inAt: 'N/A',
                  leavingAt: 'N/A',
                  outAt: 'N/A',
                  return: false,
                  detain: false,
                  reason: this.reason,
                  guestCode: this.guestCode
            };
      } else {
            data = {
                  // fullname: this.guestForm.get('name').value,
                  // phone: this.guestForm.get('phone').value,
                  // gender: this.guestForm.get('gender').value,
                  // vehicleMake: this.guestForm.get('vehicleMake').value,
                  // vehicleRegNum: this.guestForm.get('vehicleRegNum').value,
                  // vehicleColor: this.guestForm.get('vehicleColor').value,
                  // comments: this.guestForm.get('comments').value,
                  guest: this.guests,
                  confirmed: 'N/A',
                  status: 'Booked',
                  bookedAt: date,
                  bookedby: uid,
                  inAt: 'N/A',
                  leavingAt: 'N/A',
                  outAt: 'N/A',
                  return: false,
                  detain: false,
                  reason: this.reason,
                  guestCode: this.guestCode
            };
      }



      firebase.database().ref(`${role}/${uid}`).child('visitors').push(data).then((res) => {
            console.log('Added to user route successfully');
            // ADD GUEST TO GENERAL VISITOR'S NODE FOR SECURITY
            firebase.database().ref('Visitors').child(res.key).set(data).then(() => {
                  // tslint:disable-next-line:max-line-length
                  const presentAlert = this.alert.presentGroupShareAlert(`Share Booking With Guests?`, this.guests, this.guestCode, this.profile, this.location);
                  console.log('Added to Visitor\'s route for security');
                  this.router.navigate(['app/activity']);
                  this.toast.showToast('Guests Booked', '2000', 'bottom');
                  this.isLoading = false;
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.toast.showToast(err.message, '4000', 'bottom');
                  this.isLoading = false;
            });
            // ADD TO RESIDENT'S ESTATE VISITORS ROUTE /Estates/{estateUID}/visitors/{UID}
            firebase.database().ref(`Estates/${this.profile.estateUID}`).child('visitors').push(res.key).then(() => {
                  console.log('Visitor UID added to Estate route');
            }, (err) => {
                  console.log(err);
            }).catch((err: Error) => {
                  console.log(err.message);
            });
            // ADD TO DEPENDENT'S SUPER IF ROLE === dependent
            if (role === 'dependent') {
                  firebase.database().ref(`resident/${this.dependentOn.uid}/dependents/${uid}`).child('visitors').push(data).then(() => {
                        console.log('Guest added to dependent under super');
                        this.toast.showToast('Guests Booked', '2000', 'bottom');
                        this.isLoading = false;
                  }).catch((err: Error) => {
                        console.error(err.message);
                        this.toast.showToast(err.message, '4000', 'bottom');
                        this.isLoading = false;
                  });
            }
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
            this.isLoading = false;
      });
  }

  getDependentOn() {
      firebase.database().ref(`resident/${this.profile.dependentOn}`).once('value', (snapshot) => {
            console.log('Retrieved dependentOn');
            this.dependentOn = snapshot.val();
      }).catch((err: Error) => {
            console.error(err.message);
      });
}

getLocation() {
      const options: GeolocationOptions = {
            enableHighAccuracy: true
      };

      this.geoLocation.getCurrentPosition(options).then((res: Geoposition) => {
            this.location = {
                  lat: res.coords.latitude,
                  lng: res.coords.longitude
            };
      }).catch((err: Error) => {
            console.log(err.message);
      });
}

getProfile() {
      let role, uid;
      uid = this.store.getItem('hoa-uid');
      role = this.store.getItem('hoa-role');
      firebase.database().ref(role).child(uid).once('value', (snapshot) => {
            this.profile = snapshot.val();
            // GET DEPENDENT ON IF ROLE === DEPENDENT
            if (role === 'dependent') {
                  this.getDependentOn();
            }
      }).then(() => {
            console.log('Profile retrieved successfully');
            // this.toast.showToast('Profile retrieved', '2000', 'bottom');
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
      });
  }

  shareBooking() {
      // SHARE BOOKING TO VISITOR
      // USING IONIC-NATIVE
      const message = `Dear ${this.guestForm.get('name').value}, your access code into ${this.profile.estateName} is ${this.guestCode}.
      Kindly present access code on arrival.
      Host: ${this.profile.fullname}
      Direction: ${this.location.lng},${this.location.lat}`;
      this.socialSharing.share(message).then(() => {
            this.toast.showToast('Booking Shared', '2000', 'bottom');
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
      });
}

  ngOnInit() {
        //   CHECK IF GUESTCODE ALREADY EXISTS
      firebase.database().ref('Visitors').once('value', (snap) => {
            if (snap.val()) {
                  for (const key in snap.val()) {
                        if (snap.val().hasOwnProperty(key)) {
                              const visitor = snap.val()[key];
                              if (visitor.status === 'In' && visitor.guestCode === this.guestCode) {
                                    console.log('Code exists', this.guestCode);
                                    this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                              } else {
                                    console.log('Code available', this.guestCode);
                                    this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                              }
                        }
                  }
            } else {
                  console.log('No snap');
                  this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                  console.log('Guest Code', this.guestCode);
            }
      });
  }

}
