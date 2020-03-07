import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from '../toast.service';
import { AlertService } from '../alert.service';
import * as firebase from 'firebase/app';
import 'firebase/database';
// import 'firebase/auth';

@Component({
  selector: 'app-book-guest',
  templateUrl: './book-guest.page.html',
  styleUrls: ['./book-guest.page.scss'],
  providers: [HoaStoreService, ToastService, AlertService]
})
export class BookGuestPage implements OnInit {

      // fullname = '';
      // phone = '';
      // gender = '';
      // vehicleMake = '';
      // vehicleRegNum = '';
      // vehicleColor = '';
      // comments = '';
      isConfirmed = false;
      dependentOn: any = '';
      profile: any = '';
      guestCode = 0;
      isLoading = false;
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
            'vehicleMake': [
                  { type: 'required', message: 'Please specify a vehicle make' }
            ],
            'vehicleRegNum': [
                  { type: 'required', message: 'Vehicle registration number is required' }
            ],
            'vehicleColor': [
                  { type: 'required', message: 'Please specify a color' }
            ],
            'comments': [
                  { type: 'required', message: 'Please include a comment' }
            ]
          };
  constructor(private router: Router,
              private store: HoaStoreService,
              private toast: ToastService,
              private alert: AlertService,
              private contacts: Contacts,
              private socialSharing: SocialSharing,
              private geoLocation: Geolocation) {
                    this.getLocation();
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
            'vehicleMake': new FormControl(''),
            'vehicleRegNum': new FormControl(''),
            'vehicleColor': new FormControl(''),
            'comments': new FormControl(''),
            'isConfirmed': new FormControl(true)
        });
   }

  bookGuest() {
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
                  guest: {
                        fullname: this.guestForm.get('name').value,
                        phone: this.guestForm.get('phone').value,
                        gender: this.guestForm.get('gender').value,
                        vehicleMake: this.guestForm.get('vehicleMake').value || 'N/A',
                        vehicleRegNum: this.guestForm.get('vehicleRegNum').value || 'N/A',
                        vehicleColor: this.guestForm.get('vehicleColor').value || 'N/A',
                        comments: this.guestForm.get('comments').value || 'N/A'
                  },
                  confirmed: date,
                  status: 'Confirmed',
                  bookedAt: date,
                  bookedBy: uid,
                  inAt: 'N/A',
                  leavingAt: 'N/A',
                  outAt: 'N/A',
                  return: false,
                  detain: false,
                  guestCode: this.guestCode
            };
      } else {
            data = {
                  guest: {
                        fullname: this.guestForm.get('name').value,
                        phone: this.guestForm.get('phone').value,
                        gender: this.guestForm.get('gender').value,
                        vehicleMake: this.guestForm.get('vehicleMake').value || 'N/A',
                        vehicleRegNum: this.guestForm.get('vehicleRegNum').value || 'N/A',
                        vehicleColor: this.guestForm.get('vehicleColor').value || 'N/A',
                        comments: this.guestForm.get('comments').value || 'N/A'
                  },
                  status: 'Booked',
                  confirmed: 'N/A',
                  bookedAt: date,
                  bookedBy: uid,
                  inAt: 'N/A',
                  leavingAt: 'N/A',
                  outAt: 'N/A',
                  return: false,
                  detain: false,
                  guestCode: this.guestCode
            };
      }



      firebase.database().ref(`${role}/${uid}`).child('visitors').push(data).then((res) => {
            console.log('Added to user route successfully');
            // ADD GUEST TO GENERAL VISITOR'S NODE FOR SECURITY
            firebase.database().ref('Visitors').child(res.key).set(data).then(() => {
                  console.log('Added to Visitor\'s route for security');
                  // tslint:disable-next-line:max-line-length
                  const presentAlert = this.alert.presentShareAlert(`Share Booking With ${data.guest.fullname}?`, this.guestForm, this.guestCode, this.profile, this.location);
                  // console.log(presentAlert.__zone_symbol__state);
                  // presentAlert.then((presentRes) => {
                  //       console.log('PRESENT ALERT RES', presentRes);
                        // this.shareBooking();
                        this.router.navigate(['app/activity']);
                        this.toast.showToast('Guest Booked', '2000', 'bottom');
                        this.isLoading = false;
                  // }).catch((err: Error) => {
                        this.router.navigate(['app/user']);
                        this.toast.showToast('Guest Booked', '2000', 'bottom');
                        this.isLoading = false;
                  // });
                  // if (presentAlert.__zone_symbol__state) {
                  //       this.shareBooking();
                  //       this.router.navigate(['app/user']);
                  //       this.toast.showToast('Guest Booked', '2000', 'bottom');
                  //       this.isLoading = false;
                  // } else {
                  //       this.router.navigate(['app/user']);
                  //       this.toast.showToast('Guest Booked', '2000', 'bottom');
                  //       this.isLoading = false;
                  // }
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
                        this.toast.showToast('Guest Booked', '2000', 'bottom');
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

  sendSMS() {
      //   SEND BOOKING SMS TO VISITORS NUMBER
      //   USING IONIC-NATIVE
      const message = `Hey ${this.guestForm.get('name').value}, you\'re booked. Your serial number is: ${this.guestCode}`;
      this.socialSharing.shareViaSMS(message, this.guestForm.get('phone').value).then(() => {
            this.toast.showToast('SMS Sent To Guest', '2000', 'bottom');
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
      });
  }

  importContact() {
      this.contacts.pickContact().then((pickedContact: Contact) => {
            // SET FORM TO APPROPRIATE VALUES
            this.guestForm.get('name').setValue(pickedContact.displayName);
            this.guestForm.get('phone').setValue(pickedContact.phoneNumbers[0].value);
            this.toast.showToast('Contact Retrieved', '2000', 'bottom');
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
      });
  }

  bookGroupGuest() {
        this.router.navigate(['book-group']);
  }

  getDependentOn() {
      firebase.database().ref(`resident/${this.profile.dependentOn}`).once('value', (snapshot) => {
            console.log('Retrieved dependentOn');
            this.dependentOn = snapshot.val();
      }).catch((err: Error) => {
            console.error(err.message);
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
