import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoaStoreService } from '../hoa-store.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  providers: [HoaStoreService]
})
export class ActivityPage implements OnInit {

      profile: any;
      visitors: any[] = [];
      allVisitors: any[] = [];
      allVisitorsKeys: any[] = [];
      visitorsKeys: any[] = [];
      role: any;
      uid: any;
      searchKey: any;
      searchedIndex: any;
      searchErrorText: string;
  constructor(private store: HoaStoreService,
              private router: Router) {
      //   this.role = this.store.getItem('hoa-role');
      //   this.uid = this.store.getItem('hoa-uid');
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
      this.getProfile().then((success) => {
            if (success) {
                  this.getVisitors();
            } else {
                  console.log('Error!');
            }
        }).catch((err: Error) => {
            console.log(err.message);
        });
        this.visitors = this.allVisitors;
  }

  getProfile() {
      return new Promise((resolve, reject) => {
            firebase.database().ref(`${this.role}/${this.uid}`).once('value', (snapshot) => {
                  this.profile = snapshot.val();
                  console.log(snapshot.val());
                  resolve(true);
            }).catch((err: Error) => {
                  console.error(err.message);
                  reject(false);
            });
      });
  }

  getVisitors() {
        if (this.role === 'resident' || this.role === 'dependent') {
            firebase.database().ref(`${this.role}/${this.uid}`).child('visitors').orderByChild('bookedAt').once('value', (snapshot) => {
                  this.visitors = [];
                  for (const key in snapshot.val()) {
                        if (snapshot.val().hasOwnProperty(key)) {
                              const visitor = snapshot.val()[key];
                              const expires = visitor.bookedAt + 86400000;
                              // CHECK IF BOOKING IS LESS THAN 24 HOURS OLD
                              if (Date.now() <= expires) {
                                    // SHOW ONLY VISITS LESS THAN 24 HOURS OLD
                                    this.visitors.push(visitor);
                                    this.visitorsKeys.push(key);
                              }
                        }
                  }
                  this.allVisitors = this.visitors;
                  this.allVisitorsKeys = this.visitorsKeys;
                  this.visitors = this.visitors.reverse().slice(0, 20);
                  this.visitorsKeys = this.visitorsKeys.reverse().slice(0, 20);
                  // console.log('Visitors', snapshot.val());
            }).catch((err: Error) => {
                  console.error(err.message);
            });
        }
        if (this.role === 'security') {
            //   SHOW SECURITIES ESTATE VISITORS ONLY
            firebase.database().ref(`Estates/${this.profile.estateUID}/visitors`).orderByChild('bookedAt').once('value', (snapshot) => {
                  this.visitors = [];
                  for (const key in snapshot.val()) {
                        if (snapshot.val().hasOwnProperty(key)) {
                              const visitor = snapshot.val()[key];
                              const expires = visitor.bookedAt + 86400000;
                              // CHECK IF BOOKING IS LESS THAN 24 HOURS OLD
                              if (Date.now() <= expires) {
                                    // SHOW ONLY VISITS LESS THAN 24 HOURS OLD
                                    this.visitors.push(visitor);
                                    this.visitorsKeys.push(key);
                              }
                        }
                  }
                  this.allVisitors = this.visitors;
                  this.allVisitorsKeys = this.visitorsKeys;
                  this.visitors.reverse().slice(0, 20);
                  this.visitorsKeys.reverse().slice(0, 20);
                  // console.log('Visitors', snapshot.val());
            }).catch((err: Error) => {
                  console.error(err.message);
            });
        }
  }

  viewVisitor(i: number) {
      console.log(this.visitorsKeys[i]);
      this.router.navigate(['details', this.visitorsKeys[i]]);
}

  bookGuest() {
        this.router.navigate(['book-guest']);
  }

  bookGroupGuest() {
        this.router.navigate(['book-group']);
  }

  checkIsArray(obj: any) {
      return Array.isArray(obj);
  }

  filter(ev: any) {
      // this.items = this.allItems;
      // this.getVisitors();
    this.visitors = this.allVisitors;
      // console.log(ev);
    const val = ev.detail.value;
//     console.log('/val', typeof val);

    if (val && val.trim() !== '') {
      this.visitors = this.visitors.filter(term => {
            this.searchedIndex = this.visitors.indexOf(term);
            // this.visitorsKeys = this.visitorsKeys[this.searchedIndex];
            console.log('Selected Index', this.searchedIndex);
        return term.guestCode.toString() === val;
      });
      // this.visitors.filter(term => {
      //       this.visitorsKeys = [];
      //       return this.visitorsKeys.push(this.visitorsKeys[this.visitors.indexOf(term)]);
      // });
    }
    console.log(this.visitorsKeys);
  }

  search(ev: any): Promise<any> {
      // console.log(this.allVisitors);
      console.log('searching');
    //    for (let i = 0; i < this.visitors.length; i++) {
    //          console.log('forloop');
    //       if (this.visitors[i].guest.fullname === this.searchKey) {
    //             console.log('found at ' + i);
    //             this.visitors = [];
    //             this.visitors.push(this.visitors[i]);
    //       }
    //    }

    return new Promise((resolve, reject) => {
      const val = ev.detail.value;
      if (val !== '' && val !== null) {
            this.allVisitors.forEach((visitor, i) => {
               // console.log(visitor);
               // if (!this.checkIsArray(visitor.guest)) {
                     console.log(this.checkIsArray(visitor.guest));
                     if (visitor.guestCode.toString() === this.searchKey) {
                           // console.log('found at ' + i);
                           this.visitors = [];
                           this.visitorsKeys = [];
                           this.visitors.push(this.allVisitors[i]);
                           this.visitorsKeys.push(this.allVisitorsKeys[i]);
                           console.log(this.visitors);
                           this.searchErrorText = '';
                        //    return this.visitors;
                     }
                     resolve(this.searchErrorText = '');
               // } else {
               //       visitor.guest.forEach(guest => {
                           // if (guest.fullname.toLowerCase() === this.searchKey) {
                           //       // console.log('found at ' + i);
                           //       this.visitors = [];
                           //       this.visitorsKeys = [];
                           //       this.visitors.push(this.allVisitors[i]);
                           //       this.visitorsKeys.push(this.allVisitorsKeys[i]);
                           //       console.log(this.visitors);
                           //       return;
                           // }
                     });
                     reject('Guest Code Does Not Exist');
            } else {
                  this.visitors = this.allVisitors.reverse().slice(0, 20);
                  this.visitorsKeys = this.allVisitorsKeys.reverse().slice(0, 20);
                  this.searchErrorText = '';
            }
    }).catch((err) => {
      this.searchErrorText = err;
    });
    //       }
    //    });
}

// OLD SEARCH METHOD
//   search() {
//          for (let i = 0; i < this.visitors.length; i++) {
//             if (this.visitors[i].guestCode.toString() === this.searchKey) {
//                   this.visitors = [];
//                   this.visitors.push(this.visitors[])
//             }
//          }
//   }

  ngOnInit() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
      //   this.getProfile().then((success) => {
      //       if (success) {
      //             this.getVisitors();
      //       } else {
      //             console.log('Error!');
      //       }
      //   }).catch((err: Error) => {
      //       console.log(err.message);
      //   });
  }

  ionViewDidEnter() {
      // this.role = this.store.getItem('hoa-role');
      // this.uid = this.store.getItem('hoa-uid');
      // this.getProfile().then((success) => {
      //       if (success) {
      //             this.getVisitors();
      //       } else {
      //             console.log('Error!');
      //       }
      //   }).catch((err: Error) => {
      //       console.log(err.message);
      //   });
      //   this.visitors = this.allVisitors;
  }

  ionViewWillEnter() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
      this.getProfile().then((success) => {
            if (success) {
                  this.getVisitors();
            } else {
                  console.log('Error!');
            }
        }).catch((err: Error) => {
            console.log(err.message);
        });
        this.visitors = this.allVisitors;
  }

}
