import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoaStoreService } from '../hoa-store.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  providers: [HoaStoreService]
})
export class HistoryPage implements OnInit {
      profile: any;
      visitors: any[];
      visitorsKeys: any[] = [];
      role: any;
      uid: any;
      searchKey = '';
      allVisitors = [];
      allVisitorsKeys = [];
      searchedIndex = 0;
      searchErrorText: string;
  constructor(private store: HoaStoreService,
              private router: Router) {
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
  }

  getProfile() {
      firebase.database().ref(`${this.role}/${this.uid}`).once('value', (snapshot) => {
            this.profile = snapshot.val();
      }).catch((err: Error) => {
            console.error(err.message);
      });
  }

  getVisitors() {
        if (this.role === 'resident' || this.role === 'dependent') {
            firebase.database().ref(`${this.role}/${this.uid}`).child('visitors').orderByChild('bookedAt').once('value', (snapshot) => {
                  this.visitors = [];
                  for (const key in snapshot.val()) {
                        if (snapshot.val().hasOwnProperty(key)) {
                              const visitor = snapshot.val()[key];
                              this.visitors.push(visitor);
                              this.visitorsKeys.push(key);
                        }
                  }
                  this.visitors = this.visitors.reverse().slice(0, 500);
                  this.visitorsKeys = this.visitorsKeys.reverse().slice(0, 500);
                  this.allVisitors = this.visitors;
                  this.allVisitorsKeys = this.visitorsKeys;
            }).catch((err: Error) => {
                  console.error(err.message);
            });
        }
        if (this.role === 'security') {
            firebase.database().ref(`Estates/${this.profile.estateUID}/visitors`).orderByChild('bookedAt').once('value', (snapshot) => {
                  this.visitors = [];
                  for (const key in snapshot.val()) {
                        if (snapshot.val().hasOwnProperty(key)) {
                              const visitor = snapshot.val()[key];
                              this.visitors.push(visitor);
                              this.visitorsKeys.push(key);
                        }
                  }
                  this.visitors.reverse();
                  this.visitorsKeys.reverse();
                  this.allVisitors = this.visitors;
                  this.allVisitorsKeys = this.visitorsKeys;
            }).catch((err: Error) => {
                  console.error(err.message);
            });
        }
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
      console.log(ev);
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
                  this.visitors = this.allVisitors;
                  this.visitorsKeys = this.allVisitorsKeys;
                  this.searchErrorText = '';
            }
    }).catch((err) => {
      this.searchErrorText = err;
    });
    //       }
    //    });
}

//   search() {
//         console.log('searching');
//       //    for (let i = 0; i < this.visitors.length; i++) {
//       //          console.log('forloop');
//       //       if (this.visitors[i].guest.fullname === this.searchKey) {
//       //             console.log('found at ' + i);
//       //             this.visitors = [];
//       //             this.visitors.push(this.visitors[i]);
//       //       }
//       //    }

//          this.allVisitors.forEach((visitor, i) => {
//             // console.log(visitor);
//             // if (!this.checkIsArray(visitor.guest)) {
//                   console.log(this.checkIsArray(visitor.guest));
//                   if (visitor.guestCode.toString() === this.searchKey) {
//                         // console.log('found at ' + i);
//                         this.visitors = [];
//                         this.visitorsKeys = [];
//                         this.visitors.push(this.allVisitors[i]);
//                         this.visitorsKeys.push(this.allVisitorsKeys[i]);
//                         console.log(this.visitors);
//                         return;
//                   }
//             // } else {
//             //       visitor.guest.forEach(guest => {
//                         // if (guest.fullname.toLowerCase() === this.searchKey) {
//                         //       // console.log('found at ' + i);
//                         //       this.visitors = [];
//                         //       this.visitorsKeys = [];
//                         //       this.visitors.push(this.allVisitors[i]);
//                         //       this.visitorsKeys.push(this.allVisitorsKeys[i]);
//                         //       console.log(this.visitors);
//                         //       return;
//                         // }
//                   });
//       //       }
//       //    });
//   }

  checkIsArray(obj: any) {
      return Array.isArray(obj);
  }

  viewVisitor(i: number) {
      console.log(this.visitorsKeys[i]);
    this.router.navigate(['details', this.visitorsKeys[i]]);
}

  bookGuest() {
        this.router.navigate(['book-guest']);
  }

  ngOnInit() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
        this.getVisitors();
  }

  ionViewDidEnter() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
        this.getVisitors();
        this.visitors = this.allVisitors;
  }

  ionViewWillEnter() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
        this.getVisitors();
        this.visitors = this.allVisitors;
  }

}
