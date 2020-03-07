import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoaStoreService } from '../hoa-store.service';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
    './styles/categories.page.scss',
    './styles/categories.shell.scss',
    './styles/categories.responsive.scss'
  ],
  providers: [HoaStoreService]
})
export class CategoriesPage implements OnInit {
      segment = 'visitors';
      role: any = '';
      uid: any = '';
      visitors: any[] = [];
      visitorsKeys: any[] = [];
      estateNews: any[] = [];
      estateNewsKeys: any[] = [];
      profile: any = '';
      dependentOn: any = '';
      constructor(private router: Router,
                  private store: HoaStoreService) {
            this.role = this.store.getItem('hoa-role');
            this.uid = this.store.getItem('hoa-uid');
            this.getProfile();
            this.getVisitors();
            this.getNews();
      }

      getVisitors() {
            // GET GENERAL VISITORS NODE FOR SECURITY PERSONNEL
            firebase.database().ref('Visitors').orderByChild('bookedAt').once('value', (snapshot) => {
                  console.log('Ordered Visitors', snapshot.val());
                  this.visitors = [];
                  for (const key in snapshot.val()) {
                        if (snapshot.val().hasOwnProperty(key)) {
                              const visitor = snapshot.val()[key];
                              this.visitorsKeys.push(key);
                              this.visitors.push(visitor);
                        }
                  }
            }).catch((err: Error) => {
                  console.error(err.message);
            });
      }

      getNews() {
            // GET NEWS OF THE ESTATE THE USER BELONGS TO
                  console.log('Role', this.role);
                  console.log('Uid', this.uid);
                  if (this.role === 'resident' || this.role === 'security') {
                        firebase.database().ref(`${this.role}/${this.uid}`).child('estateName').once('value', (snapshot) => {
                              const estateName = snapshot.val();
                              console.log('Estate', snapshot.val());

                              firebase.database().ref(`Estates/${snapshot.val()}`).child('news').orderByChild('postedAt').on('value', (snap) => {
                                    for (const key in snap.val()) {
                                          if (snap.val().hasOwnProperty(key)) {
                                                const news = snap.val()[key];
                                                this.estateNewsKeys.push(key);
                                                this.estateNews.push(news);
                                          }
                                    }
                              }, (err: Error) => {
                                    console.error(err.message);
                              });
            }).catch((err: Error) => {
                  console.error(err.message);
            });
            }
      }

      getDependentOn() {
            console.log('Profile', this.profile);
            firebase.database().ref(`resident/${this.profile.dependentOn}`).once('value', (snapshot) => {
                  console.log('Retrieved dependentOn');
                  this.dependentOn = snapshot.val();
                  // GET NEWS FOR DEPENDENTS
                  if (this.role === 'dependent') {
                        console.log('DependentOn', snapshot.val());
                        firebase.database().ref(`resident/${snapshot.val().uid}`).child('estateName').once('value', (snapshot) => {
                              const estateName = snapshot.val();
                              console.log('Estate', snapshot.val());

                              firebase.database().ref(`Estates/${estateName}`).child('news').orderByChild('postedAt').on('value', (snap) => {
                                    for (const key in snap.val()) {
                                          if (snap.val().hasOwnProperty(key)) {
                                                const news = snap.val()[key];
                                                this.estateNewsKeys.push(key);
                                                this.estateNews.push(news);
                                          }
                                    }
                                    console.log('News', this.estateNews);
                              }, (err: Error) => {
                                    console.error(err.message);
                              });
                        }).catch((err: Error) => {
                              console.error(err.message);
                        });
                  }
            }).catch((err: Error) => {
                  console.error(err.message);
            });
      }

      getProfile() {
            firebase.database().ref(`${this.role}/${this.uid}`).once('value', (snapshot) => {
                  this.profile = snapshot.val();
                  if (this.role === 'dependent') {
                        this.getDependentOn();
                  }
            }).catch((err: Error) => {
                  console.error(err.message);
            });
      }

      viewVisitor(i: number) {
            this.router.navigate(['details', this.visitorsKeys[i]]);
      }

      viewNews(i: number) {
            // TO NEWS DETAILS PAGE
      }

      segmentChanged(ev) {
            console.log('Segment Changed');
      }

      ngOnInit() {
            this.role = this.store.getItem('hoa-role');
            this.uid = this.store.getItem('hoa-uid');
      }
 }
