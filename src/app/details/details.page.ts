import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from '../toast.service';
import { AlertService } from '../alert.service';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  providers: [HoaStoreService, ToastService, AlertService]
})
export class DetailsPage implements OnInit {

      visitor: any = {guest: {}};
      host: any = {fullname: 'Host Name', estateAptNum: '001'};
      uid;
      role;
      key;
      profile;
      location;
      dependentOn;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: HoaStoreService,
              private toast: ToastService,
              private alertService: AlertService,
              private geoLocation: Geolocation,
              private socialSharing: SocialSharing) {
      this.uid = this.store.getItem('hoa-uid');
      this.role = this.store.getItem('hoa-role');
      this.getVisitor();
      this.getLocation();
   }

//    ionViewWillEnter() {
//          console.log('VIEW WILL ENTER');
//          this.getVisitor();
//    }

   setLeaving() {
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('leavingAt').set(Date())
         .then(() => {
            //    SET LEAVINGAT AT GENERAL NODE
            firebase.database().ref(`Visitors/${this.key}`).child('leavingAt').set(Date()).then(() => {
                  console.log('General Leaving set');
            }).catch((err: Error) => {
                  console.error(err.message);
            });
            //    SET STATUS TO 'Leaving'
               firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Leaving').then(() => {
                  console.log('Leaving set');
               }).catch((err: Error) => {
                     console.error(err.message);
               });
               firebase.database().ref(`Visitors/${this.key}`).child('status').set('Leaving').then(() => {
                  console.log('Leaving set');
               }).catch((err: Error) => {
                     console.error(err.message);
               });
         }).catch((err: Error) => {
               console.error(err.message);
         });
   }

   shareBooking() {
      // SHARE BOOKING TO VISITOR
      // USING IONIC-NATIVE
      // check if guests is an array
      if (this.checkIsArray(this.visitor.guest)) {
            // GROUP SHARE
            // const message = `Dear guest, your access code into ${this.profile.estateName} Estate is ${this.visitor.guestCode}.
            // Kindly present access code on arrival.
            // Host: ${this.profile.fullname}
            // Direction: https://google.com/maps/dir/''/${this.location.lat},${this.location.lng}`;
            this.alertService.presentGroupShareAlert('Share Booking With Guests?', this.visitor.guest, this.visitor.guestCode, this.profile, this.location);
      } else {
            // NORMAL SHARE
            // const message = `Dear ${this.visitor.fullname}, your access code into ${this.profile.estateName} Estate is ${this.visitor.guestCode}.
            // Kindly present access code on arrival.
            // Host: ${this.profile.fullname}
            // Direction: https://google.com/maps/place/${this.location.lat},${this.location.lng}`;
            this.alertService.presentShareAlert(`Share Booking With ${this.visitor.guest.fullname}?`, this.visitor.guest, this.visitor.guestCode, this.profile, this.location);
      }
      // this.socialSharing.share(message).then(() => {
      //       this.toast.showToast('Booking Shared', '2000', 'bottom');
      // }, (err) => {
      //       this.toast.showToast('Operation Cancelled', '2000', 'bottom');
      // }).catch((err: Error) => {
      //       this.toast.showToast(err.message, '4000', 'bottom');
      // });
}

shareGroupBooking() {
      this.visitor.guest.forEach(guest => {
            const message = `Dear ${guest.fullname}, your access code into ${this.profile.estateName} Estate is ${this.visitor.guestCode}.
            Kindly present access code on arrival.
            Host: ${this.profile.fullname}
            Direction: ${this.location.lng},${this.location.lat}`;
            this.socialSharing.shareViaSMS(message, guest.phone).then(() => {
                  this.toast.showToast('Booking Shared', '2000', 'bottom');
            }, (err) => {
                  this.toast.showToast('Operation Cancelled', '2000', 'bottom');
            }).catch((err: Error) => {
                  this.toast.showToast(err.message, '4000', 'bottom');
            });
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
            console.log(this.location);
      }, (err) => {
            console.error(err);
      }).catch((err: Error) => {
            console.error(err.message);
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

  getDependentOn() {
      firebase.database().ref(`resident/${this.profile.dependentOn}`).once('value', (snapshot) => {
            console.log('Retrieved dependentOn');
            this.dependentOn = snapshot.val();
      }).catch((err: Error) => {
            console.error(err.message);
      });
}

   return() {
      firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('return').set(true)
      .then(() => {
         //    SET RETURN AT GENERAL NODE
         firebase.database().ref(`Visitors/${this.key}`).child('return').set(true).then(() => {
               console.log('General return set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         //    SET STATUS TO 'Return'
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Return').then(() => {
            console.log('Return set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         firebase.database().ref(`Visitors/${this.key}`).child('status').set('Return').then(() => {
            console.log('Return set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
      }).catch((err: Error) => {
            console.error(err.message);
      });
   }

   detain() {
      firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('detain').set(true)
      .then(() => {
         //    SET DETAIN AT GENERAL NODE
         firebase.database().ref(`Visitors/${this.key}`).child('detain').set(true).then(() => {
               console.log('General detain set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         //    SET STATUS TO 'Hold/Detain'
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Hold/Detain').then(() => {
            console.log('Hold/Detain set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         firebase.database().ref(`Visitors/${this.key}`).child('status').set('Hold/Detain').then(() => {
            console.log('Hold/Detain set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
      }).catch((err: Error) => {
            console.error(err.message);
      });
   }

   checkIn() {
      firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('inAt').set(Date())
      .then(() => {
         //    SET INAT AT GENERAL NODE
         firebase.database().ref(`Visitors/${this.key}`).child('inAt').set(Date()).then(() => {
               console.log('General inAt set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         //    SET STATUS TO 'Leaving'
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('In').then(() => {
            console.log('In set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         firebase.database().ref(`Visitors/${this.key}`).child('status').set('In').then(() => {
            console.log('In set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
      //    RESET DETAIN
      firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('detain').set(false)
      .then(() => {
            //    SET DETAIN AT GENERAL NODE
            firebase.database().ref(`Visitors/${this.key}`).child('detain').set(false).then(() => {
                  console.log('General detain set');
            }).catch((err: Error) => {
                  console.error(err.message);
            });
      });
      //    RESET RETURN
      firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('return').set(false)
      .then(() => {
            //    SET return AT GENERAL NODE
            firebase.database().ref(`Visitors/${this.key}`).child('return').set(false).then(() => {
                  console.log('General return set');
            }).catch((err: Error) => {
                  console.error(err.message);
            });
      });
      }).catch((err: Error) => {
            console.error(err.message);
      });
   }

   checkOut() {
      firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('outAt').set(Date())
      .then(() => {
         //    SET outAt AT GENERAL NODE
         firebase.database().ref(`Visitors/${this.key}`).child('outAt').set(Date()).then(() => {
               console.log('General outAt set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         //    SET STATUS TO 'Leaving'
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Out').then(() => {
            console.log('Out set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         firebase.database().ref(`Visitors/${this.key}`).child('status').set('Out').then(() => {
            console.log('Out set');
         }).catch((err: Error) => {
               console.error(err.message);
         });
         //    RESET DETAIN
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('detain').set(false)
         .then(() => {
               //    SET DETAIN AT GENERAL NODE
               firebase.database().ref(`Visitors/${this.key}`).child('detain').set(false).then(() => {
                     console.log('General detain set');
               }).catch((err: Error) => {
                     console.error(err.message);
               });
         });
         //    RESET RETURN
         firebase.database().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('return').set(false)
         .then(() => {
               //    SET return AT GENERAL NODE
               firebase.database().ref(`Visitors/${this.key}`).child('return').set(false).then(() => {
                     console.log('General return set');
               }).catch((err: Error) => {
                     console.error(err.message);
               });
         });
      }).catch((err: Error) => {
            console.error(err.message);
      });
   }

   bookOut() {
      // BOOK OUT GUEST AND DELETE FROM GENERAL NODE AND
      firebase.database().ref(`Visitors`).child(this.key).remove()
      .then(() => {
            console.log('Removed from general node');
            // RESIDENT NODE
            firebase.database().ref(`${this.role}/${this.uid}/visitors`).child(this.key).remove()
            .then(() => {
                  this.toast.showToast('Guest Booked Out', '2000', 'bottom');
                  this.router.navigate(['app/activity']);
            }).catch((err: Error) => {
                  this.toast.showToast(err.message, '4000', 'bottom');
            });
            // this.toast.showToast('Guest Booked Out', '2000', 'bottom');
            // this.router.navigate(['app/activity']);
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
            console.error(err.message);
      });
   }

   checkIsArray(obj: any) {
      return Array.isArray(obj);
  }

  getVisitor() {
      const uid = this.store.getItem('hoa-uid');
      const role = this.store.getItem('hoa-role');
      this.uid = uid;
      this.role = role;
      this.route.paramMap.subscribe((param) => {
            console.log('Param', param);
            const key = param.get('visitor');
            console.log('Key', key);
            this.key = key;
            // this.visitor = param.get('visitor');
            if (role === 'resident' || role === 'dependent') {
                  firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', (snapshot) => {
                        this.visitor = snapshot.val();
                        console.log('Snap', snapshot.val());
                  });
                  // console.log('Visitor', this.visitor);
            }
            if (role === 'security') {
                  firebase.database().ref(`Visitors`).child(key).on('value', (snapshot) => {
                        this.visitor = snapshot.val();
                        console.log('Snap', snapshot.val());
                        // GET HOST NAME
                        // if (this.getResidentHost(snapshot.val().bookedby)) {
                        //       this.host = this.getResidentHost(snapshot.val().bookedby);
                        // } else {
                        //       this.host = this.getDependentHost(snapshot.val().bookedby);
                        // }
                       (this.getResidentHost(snapshot.val().bookedBy) || this.getDependentHost(snapshot.val().bookedBy));
                       console.log('HOST', this.host);
                  });
                  // console.log('Visitor', this.visitor);
            }
      });
  }

  getDependentHost(bookedBy: any): any {
      console.log('By', bookedBy);
      let val;
      firebase.database().ref(`dependent`).child(bookedBy).once('value', (snap) => {
            // this.host =  snap.val();
            console.log('Host',  snap.val());
            this.host = snap.val();
      });
      return val;
  }

  getResidentHost(bookedBy: any): any {
      console.log('By', bookedBy);
      let val;
      firebase.database().ref(`resident`).child(bookedBy).once('value', (snap) => {
            // this.host = snap.val();
            console.log('Host', snap.val());
            this.host = snap.val();
      });
      return val;
  }


  ngOnInit() {
      this.getProfile();
      // this.getLocation();
  }

  ionViewWillEnter() {
      this.getProfile();
      // this.getLocation();
  }

}
