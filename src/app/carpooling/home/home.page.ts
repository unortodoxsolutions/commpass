import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonSegment } from '@ionic/angular';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

import { HoaStoreService } from '../../hoa-store.service';
import { ToastService } from '../../toast.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [
        HoaStoreService,
        ToastService
      ]
})
export class HomePage implements OnInit, AfterViewInit {

      @ViewChild('placesRef', {static: false}) placesRef: GooglePlaceDirective;
      @ViewChild('content', {static: false}) content: IonContent;
      @ViewChild('findTo', {static: false}) findTo: ElementRef;
      @ViewChild('findFrom', {static: false}) findFrom: ElementRef;
      @ViewChild('offerTo', {static: false}) offerTo: ElementRef;
      @ViewChild('offerFrom', {static: false}) offerFrom: ElementRef;
      @ViewChild('ionSegment', {static: false}) ionSegment: IonSegment;
      offerRideForm: FormGroup;
      findRideForm: FormGroup;
      segment = 'findRide';
      offerRideButtonText = 'Offer Ride';
      findRideButtonText = 'Find Ride';
      findRideSearchResults: any[];
      rideHistory: any[];
      isLoading = false;
      profile;
      estateUID;
      role;
      uid;
      placesOptions = {

      };
      validation_messages = {
            'offerFrom': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'offerTo': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'offerDate': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'offerTime': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'offerSeats': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'findFrom': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'findTo': [
                  { type: 'required', message: 'Field is required.' }
            ],
            'findSeats': [
                  { type: 'required', message: 'Field is required.' }
            ]
          };
  constructor(private store: HoaStoreService,
              private toast: ToastService,
              private router: Router) {
                  this.role = this.store.getItem('hoa-role');
                  this.uid = this.store.getItem('hoa-uid');
        this.initFindRideForm().then(() => {

            const findTo = new google.maps.places.Autocomplete(this.findTo.nativeElement);
                      findTo.addListener('place_changed', () => {
                            // console.log(findTo.getPlace());
                            // FORCE VALUE SET
                            this.findRideForm.get('findTo').setValue(findTo.getPlace().formatted_address);
                            console.log(this.findRideForm.get('findTo').value);
                      });
                      const findFrom = new google.maps.places.Autocomplete(this.findFrom.nativeElement);
                      findFrom.addListener('place_changed', () => {
                            // console.log(findFrom.getPlace());
                            // FORCE VALUE SET
                            this.findRideForm.get('findFrom').setValue(findFrom.getPlace().formatted_address);
                            console.log(this.findRideForm.get('findFrom').value);
                      });

        });
        this.initOfferRideForm();
      //   this.initOfferRideForm().then(() => {

      //       const offerTo = new google.maps.places.Autocomplete(this.offerTo.nativeElement);
      //       offerTo.addListener('place_changed', () => {
      //             // console.log(offerTo.getPlace());
      //             // FORCE VALUE SET
      //             this.offerRideForm.get('offerTo').setValue(offerTo.getPlace().name);
      //             console.log(this.offerRideForm.get('offerTo').value);
      //       });
      //       const offerFrom = new google.maps.places.Autocomplete(this.offerFrom.nativeElement);
      //       offerFrom.addListener('place_changed', () => {
      //             // console.log(offerFrom.getPlace());
      //             // FORCE VALUE SET
      //             this.offerRideForm.get('offerFrom').setValue(offerFrom.getPlace().name);
      //             console.log(this.offerRideForm.get('offerFrom').value);
      //       });

      //   });
        this.getProfile();
   }

   segmentChanged(e: any) {
         console.log(e);
      //  CHECK CURRENT SEGMENT AND APPLY GOOGLE PLACES AUTOCOMPLETE
      // INPUT BUG FIX ACCORDINGLY
      if (e.detail.value === 'findRide') {
            // FIX FOR FIND RIDE SEGMENT
            this.initFindRideForm().then(() => {
                  const findTo = new google.maps.places.Autocomplete(this.findTo.nativeElement);
                  findTo.addListener('place_changed', () => {
                        // console.log(findTo.getPlace());
                        // FORCE VALUE SET
                        this.findRideForm.get('findTo').setValue(findTo.getPlace().formatted_address);
                        console.log(this.findRideForm.get('findTo').value);
                  });
                  const findFrom = new google.maps.places.Autocomplete(this.findFrom.nativeElement);
                  findFrom.addListener('place_changed', () => {
                        // console.log(findFrom.getPlace());
                        // FORCE VALUE SET
                        this.findRideForm.get('findFrom').setValue(findFrom.getPlace().formatted_address);
                        console.log(this.findRideForm.get('findFrom').value);
                  });
            });
      } else
      if (e.detail.value === 'offerRide') {
            console.log('offerRide segment active');
            console.log(this.offerFrom, this.offerTo);
            // FIX FOR OFFER RIDE SEGMENT
            // this.initOfferRideForm().then(() => {
                  const offerTo = new google.maps.places.Autocomplete(this.offerTo.nativeElement);
                  offerTo.addListener('place_changed', () => {
                        // console.log(offerTo.getPlace());
                        // FORCE VALUE SET
                        this.offerRideForm.get('offerTo').setValue(offerTo.getPlace().formatted_address);
                        console.log(this.offerRideForm.get('offerTo').value);
                  });
                  const offerFrom = new google.maps.places.Autocomplete(this.offerFrom.nativeElement);
                  offerFrom.addListener('place_changed', () => {
                        // console.log(offerFrom.getPlace());
                        // FORCE VALUE SET
                        this.offerRideForm.get('offerFrom').setValue(offerFrom.getPlace().formatted_address);
                        console.log(this.offerRideForm.get('offerFrom').value);
                  });
            // });
      } else {
            // FALLBACK
            return;
      }
   }

   viewRideDetails(i: number) {
      // ROUTE TO /ride-details/:ride
      const ride = this.findRideSearchResults[i];

      this.router.navigate(['ride-details', JSON.stringify(ride)]);
   }

   viewRideHistoryDetails(i: number) {
      // ROUTE TO /ride-details/:ride
      const ride = this.rideHistory[i];

      this.router.navigate(['ride-details', JSON.stringify(ride)]);
   }

   getRideHistory() {
      //    GET RESIDENT'S RIDE HISTORY FROM /{uid}/rides/history ROUTE
      firebase.database().ref(`${this.role}/${this.uid}`).child('rides/history').once('value', (rides) => {
            this.rideHistory = [];
            for (const key in rides.val()) {
                  if (rides.val().hasOwnProperty(key)) {
                        const rideKey = rides.val()[key];
                        console.log(rideKey);
                        // GET RIDE DETAISL FROM /Carpooling/rides/{rideKey}
                        firebase.database().ref('Carpooling/rides').child(rideKey).once('value', (ride) => {
                              this.rideHistory.push(ride.val());
                              console.log(ride.val());
                              this.toast.showToast('Ride History Retrieved', '2000', 'bottom');
                        }, (err: Error) => {
                              console.warn(err.message);
                              this.toast.showToast(err.message, '4000', 'bottom');
                        }).catch((err: Error) => {
                              console.error(err.message);
                              this.toast.showToast(err.message, '4000', 'bottom');
                        });
                  }
            }
      }, (err: Error) => {
            console.warn(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
      });
   }

   findRide() {
         this.isLoading = true;
         this.findRideButtonText = 'Finding Ride';
         const searchParams = {
               from: this.findRideForm.get('findFrom').value,
               to: this.findRideForm.get('findTo').value,
               seats: this.findRideForm.get('findSeats').value
         };

      // GET RIDES FROM RESIDENT'S ESTATE'S /carpooling/rides ROUTE
      firebase.database().ref(`Estates/${this.estateUID}`).child('carpooling/rides').once('value', (estateRides) => {
            const estateRidesVals = estateRides.val();
            console.log(estateRidesVals);
            this.findRideSearchResults = [];

            for (const key in estateRides.val()) {
                  if (estateRides.val().hasOwnProperty(key)) {
                        const estateRideKey = estateRides.val()[key];
                        console.log(estateRideKey);
                        // GET RIDE DETAILS FROM GENERAL /Carpooling/rides ROUTE
                        firebase.database().ref('Carpooling/rides').child(estateRideKey).once('value', (rideDetails) => {
                              const ride = rideDetails.val();
                              console.log(ride);

                              // CHECK IF searchParams === ride.from && ride.to && ride.seats
                              if (ride.from === searchParams.from &&
                                  ride.to === searchParams.to &&
                                  ride.seats >= searchParams.seats) {
                                    this.findRideSearchResults.push(ride);
                              }
                        }, (err) => {
                              console.error(err);
                        }).catch((err: Error) => {
                              console.error(err.message);
                        });
                  }
            }
            this.isLoading = false;
            console.log('results', this.findRideSearchResults);
            this.content.scrollByPoint(0, 150, 1500);
            this.findRideButtonText = 'Find Ride';
            this.toast.showToast('Found Some Rides', '2000', 'bottom');
      }, (err) => {
            console.log(err);
            this.isLoading = false;
            this.findRideButtonText = 'Find Ride';
            this.toast.showToast(err.message, '4000', 'bottom');
      }).catch((err: Error) => {
            console.error(err.message);
            this.isLoading = false;
            this.findRideButtonText = 'Find Ride';
            this.toast.showToast(err.message, '4000', 'bottom');
      });
   }

   offerRide() {
         this.isLoading = true;
         this.offerRideButtonText = 'Offering Ride';
         const formData = {
               from: this.offerRideForm.get('offerFrom').value,
               to: this.offerRideForm.get('offerTo').value,
               date: this.offerRideForm.get('offerDate').value,
               time: this.offerRideForm.get('offerTime').value,
               seats: this.offerRideForm.get('offerSeats').value,
               offeredBy: this.profile
         };
            // SAVE TO GENERAL /carpooling/rides ROUTE
            // FOR ADMIN ANALYTICS
            firebase.database().ref(`Carpooling`).child('rides').push(formData).then((genRes) => {
                  console.log('Ride saved to general node', genRes.key);

                  // SAVE INTO RESIDENT'S ESTATE'S /carpooling/rides ROUTE
                  firebase.database().ref(`Estates/${this.estateUID}`).child('carpooling/rides').push(genRes.key).then(() => {
                        // SAVE TO RESIDENT'S /rides/history ROUTE
                        firebase.database().ref(`${this.role}/${this.uid}`).child('rides/history').push(genRes.key).then(() => {
                              this.toast.showToast('Ride Offered', '2000', 'bottom');
                              console.log('Ride offered');
                              this.clearOfferRideForm();
                              this.isLoading = false;
                              this.offerRideButtonText = 'Offer Ride';
                        }, (err) => {
                              this.toast.showToast(err, '4000', 'bottom');
                              console.error(err);
                              this.isLoading = false;
                              this.offerRideButtonText = 'Offer Ride';
                        }).catch((err: Error) => {
                              this.toast.showToast(err.message, '4000', 'bottom');
                              console.error(err.message);
                              this.isLoading = false;
                              this.offerRideButtonText = 'Offer Ride';
                        });
            }, (err) => {
                  console.error(err);
            }).catch((err: Error) => {
                  console.error(err.message);
            });
      }, (err) => {
            this.toast.showToast(err, '4000', 'bottom');
            console.error(err);
            this.isLoading = false;
            this.offerRideButtonText = 'Offer Ride';
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
            console.error(err.message);
            this.isLoading = false;
            this.offerRideButtonText = 'Offer Ride';
      });
   }

   getProfile() {
         const role = this.store.getItem('hoa-role');
         const uid = this.store.getItem('hoa-uid');

         return new Promise((resolve, reject) => {
            firebase.database().ref(`${role}/${uid}`).once('value', (profile) => {
                  this.estateUID = profile.val().estateUID;
                  this.profile = profile.val();
                  resolve(true);
            }, (err) => {
               // this.toast.showToast(err.message, '4000', 'bottom');
               console.error(err.message);
               reject(false);
            }).catch((err: Error) => {
               //    this.toast.showToast(err.message, '4000', 'bottom');
               console.error(err.message);
               reject(false);
            });
         }).then((res) => {
            if (res) {
                  this.getRideHistory();
            }
         }).catch((err) => {
            console.error(err);
         });
   }

  initFindRideForm() {
      //   INIT offerRideForm
      return new Promise((resolve, reject) => {
            //   INIT findRideForm
            this.findRideForm = new FormGroup({
                  'findFrom': new FormControl('', Validators.compose([
                        Validators.required
                  ])),
                  'findTo': new FormControl('', Validators.compose([
                        Validators.required
                  ])),
                  'findSeats': new FormControl(1, Validators.compose([
                        Validators.required
                  ]))
            });
            resolve(true);
      });
  }

  initOfferRideForm() {
        return new Promise((resolve, reject) => {
            this.offerRideForm = new FormGroup({
                  'offerFrom': new FormControl('', Validators.compose([
                        Validators.required
                  ])),
                  'offerTo': new FormControl('', Validators.compose([
                        Validators.required
                  ])),
                  'offerDate': new FormControl('', Validators.compose([
                        Validators.required
                  ])),
                  'offerTime': new FormControl('', Validators.compose([
                        Validators.required
                  ])),
                  'offerSeats': new FormControl(1, Validators.compose([
                        Validators.required
                  ]))
              });
              resolve(true);
        });
  }

  clearOfferRideForm() {
        this.offerRideForm.get('offerFrom').reset();
        this.offerRideForm.get('offerTo').reset();
        this.offerRideForm.get('offerDate').reset();
        this.offerRideForm.get('offerTime').reset();
        this.offerRideForm.get('offerSeats').reset();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
      // GOOGLE PLACES AUTOCOMPLETE FORM INPUTS
      const findTo = new google.maps.places.Autocomplete(this.findTo.nativeElement);
      findTo.addListener('place_changed', () => {
            const addr = findTo.getPlace().formatted_address;
            console.log(findTo.getPlace());
            // FORCE VALUE SET
            this.findRideForm.get('findTo').setValue(addr);
      });
      const findFrom = new google.maps.places.Autocomplete(this.findFrom.nativeElement);
      findFrom.addListener('place_changed', () => {
            const addr = findFrom.getPlace().formatted_address;
            console.log(findFrom.getPlace());
            // FORCE VALUE SET
            this.findRideForm.get('findFrom').setValue(addr);
      });
}

ionViewWillEnter() {
      // this.initForms();
}

}
