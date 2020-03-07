import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from '../toast.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: [
    './styles/notifications.page.scss',
    './styles/notifications.shell.scss'
  ],
  providers: [
        HoaStoreService,
        ToastService
  ]
})
export class NotificationsPage implements OnInit {
  notifications: any[];
role: any;
uid: any;
profile: any;
loading = false;
  constructor(private route: ActivatedRoute,
              private store: HoaStoreService,
              private toast: ToastService) {
                  this.getNotifications();
                  this.getProfile();
            }

  getNotifications() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');

      firebase.database().ref(`${this.role}/${this.uid}`).child('notifications').orderByChild('sentAt').once('value', (notifications) => {
            // RESET NOTIFICATIONS
            this.notifications = [];
            for (const key in notifications.val()) {
                  if (notifications.val().hasOwnProperty(key)) {
                        const notif = notifications.val()[key];
                        this.notifications.push(notif);
                  }
            }
            this.notifications.reverse();
            this.toast.showToast('Notifications Retrieved', '2000', 'bottom');
      }, (err) => {
            console.error(err);
            this.toast.showToast('Could Not Get Notifications', '4000', 'bottom');
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
      });
  }

  rejectRequest(i: number) {
        this.loading = true;
        const data = {
            title: 'Request Denied',
            from: `${this.profile.fullname}`,
            message: `${this.profile.fullname} has rejected your request for a ride`,
            sentAt: Date.now(),
            notifType: 'rideResponseNeg'
        };
      // SEND REJECTION MESSAGE TO REQUESTING RESIDENT
      firebase.database().ref(`resident/${this.notifications[i].requestedBy}`).child('notifications').push(data)
            .then(() => {
                  console.log('Sent Rejection Message');
                  this.toast.showToast('Rejection Message Sent', '2000', 'bottom');
                  this.loading = false;
                  // DELETE NOTIFICATION AFTER RESPONSE
                  firebase.database().ref(`resident/${this.notifications[i].requestedBy}/notifications`).child(this.notifications[i].key)
                        .remove((err: Error) => {
                              if (err) {
                                    console.error(err.message);
                                    return;
                              }
                        }).then(() => {
                              this.getNotifications();
                        });
            }, (err) => {
                  console.error(err);
                  this.toast.showToast('Could Not Send Rejection Message. Try Again.', '4000', 'bottom');
                  this.loading = false;
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.toast.showToast(err.message, '4000', 'bottom');
                  this.loading = false;
            });
  }

  acceptRequest(i: number) {
        this.loading = true;
      const data = {
            title: 'Request Accepted',
            from: `${this.profile.fullname}`,
            message: `${this.profile.fullname} has accepted your request for a ride`,
            sentAt: Date.now(),
            notifType: 'rideResponsePos'
        };
      // SEND ACCEPTANCE MESSAGE TO REQUESTING RESIDENT
      firebase.database().ref(`resident/${this.notifications[i].requestedBy}`).child('notifications').push(data)
            .then(() => {
                  console.log('Sent Acceptance Message');
                  this.toast.showToast('Acceptance Message Sent', '2000', 'bottom');
                  this.loading = false;
                  // DELETE NOTIFICATION AFTER RESPONSE
                  firebase.database().ref(`resident/${this.notifications[i].requestedBy}/notifications`).child(this.notifications[i].key)
                        .remove((err: Error) => {
                              if (err) {
                                    console.error(err.message);
                                    return;
                              }
                        }).then(() => {
                              this.getNotifications();
                        });
            }, (err) => {
                  console.error(err);
                  this.toast.showToast('Could Not Send Acceptance Message. Try Again.', '4000', 'bottom');
                  this.loading = false;
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.toast.showToast(err.message, '4000', 'bottom');
                  this.loading = false;
            });
  }

  getProfile() {
      const role = this.store.getItem('hoa-role');
      const uid = this.store.getItem('hoa-uid');

      firebase.database().ref(`${role}/${uid}`).once('value', (userProfile) => {
            this.profile = userProfile.val();
      }, (err) => {
            console.error(err);
      }).catch((err: Error) => {
            console.error(err.message);
      });
  }

  ionViewWillEnter() {
      //   this.notifications = [];
        this.getNotifications();
  }
  ngOnInit(): void {
//     if (this.route && this.route.data) {
//       this.route.data.subscribe(resolvedData => {
//         const dataSource = resolvedData['data'];
//         if (dataSource) {
//           dataSource.source.subscribe(pageData => {
//             if (pageData) {
//               this.notifications = pageData;
//             }
//           });
//         }
//       });
//     }
  }
}
