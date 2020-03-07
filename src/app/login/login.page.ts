import { Component, OnInit, } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

import { Toast } from '@ionic-native/toast/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from '../toast.service';

// import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ],
  providers: [HoaStoreService, ToastService]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  isLoading = false;

  constructor(
    public router: Router,
    public menu: MenuController,
    private toast: ToastService,
    private store: HoaStoreService,
    private platform: Platform
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('test@test.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
      // 'role': new FormControl('', Validators.compose([
      //       Validators.required
      //     ]))
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  doLogin(): void {
        this.isLoading = true;
    console.log('do Log In');
//     firebase.auth().currentUser.
      firebase.auth().signInWithEmailAndPassword(this.loginForm.get('email').value,
      this.loginForm.get('password').value).then((res) => {
            console.log('login successful');
            this.store.setItem('hoa-uid', res.user.uid);
            // if (this.platform.is('android') || this.platform.is('ios')) {
            //       console.log('Platform is native');
            //       window.localStorage.setItem('hoa-uid', res.user.uid); // REMOVE BEFORE BUILD
            //       this.store.setItem('hoa-uid', res.user.uid).then(() => {
            //             console.log('UID SAVED');
            //       }).catch((err: Error) => {
            //             console.error(err.message);
            //       });
            // } else if (this.platform.is('mobileweb')) {
            //       console.log('Platform is not native');
            //       window.localStorage.setItem('hoa-uid', res.user.uid);
            // } else {
            //       console.log('Not running on browser or native device');
            //       window.localStorage.setItem('hoa-uid', res.user.uid);
            // }
            // CHECK FOR RESIDENT
            if (firebase.database().ref('resident').child(res.user.uid).once('value') !== null) {
                  console.log('isIT', firebase.database().ref('resident').child(res.user.uid).once('value', (snap) => {
                        return snap.val();
                  }));
                  firebase.database().ref('resident').child(res.user.uid).once('value', (snapshot) => {
                        this.store.setItem('hoa-role', snapshot.val().role);
                        // for (const key in snapshot.val()) {
                        //       if (snapshot.val().hasOwnProperty(key)) {
                        //             const element = snapshot.val()[key];
                        //             if (key === res.user.uid) {
                                          // window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // if (this.platform.is('android') || this.platform.is('ios')) {
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role); // REMOVE BEFORE BUILD
                                          //       this.store.setItem('hoa-role', snapshot.val().role).then(() => {
                                          //             console.log('ROLE SAVED');
                                          //       }).catch((err: Error) => {
                                          //             console.error(err.message);
                                          //       });
                                          // } else if (this.platform.is('mobileweb')) {
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // } else {
                                          //       console.log('Not running on browser or native device');
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // }
                                          this.isLoading = false;
                                          this.toast.showToast(`Welcome Back ${snapshot.val().fullname.split(' ')[0]}`, '2000', 'bottom');
                                    // } else {
                                          console.log('User is a ' + snapshot.val().role);
                        //             }
                        //       }
                        // }
                  }).then(() => {
                        if (window.localStorage.getItem('hoa-role')) {
                              this.router.navigate(['app/activity']);
                        }
                      });
            }
            // CHECK FOR SECURITY
            if (firebase.database().ref('security').child(res.user.uid).once('value') !== null) {
                  firebase.database().ref('security').child(res.user.uid).once('value', (snapshot) => {
                        // for (const key in snapshot.val()) {
                        //       if (snapshot.val().hasOwnProperty(key)) {
                        //             const element = snapshot.val()[key];
                        //             if (key === res.user.uid) {
                                          // window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          this.store.setItem('hoa-role', snapshot.val().role);
                                          // if (this.platform.is('android') || this.platform.is('ios')) {
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role); // REMOVE BEFORE BUILD
                                          //       this.store.setItem('hoa-role', snapshot.val().role).then(() => {
                                          //             console.log('ROLE SAVED');
                                          //       }).catch((err: Error) => {
                                          //             console.error(err.message);
                                          //       });
                                          // } else if (this.platform.is('mobileweb')) {
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // } else {
                                          //       console.log('Not running on browser or native device');
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // }
                                          this.isLoading = false;
                                          this.toast.showToast(`Welcome Back ${snapshot.val().fullname.split(' ')[0]}`, '2000', 'bottom');
                                    // } else {
                                          console.log('User is a ' + snapshot.val().role);
                        //             }
                        //       }
                        // }
                  }).then(() => {
                        if (window.localStorage.getItem('hoa-role')) {
                              this.router.navigate(['app/activity']);
                        }
                      });
            }
            // CHECK FOR DEPENDENT
            if (firebase.database().ref('dependent').child(res.user.uid).once('value') !== null) {
                  firebase.database().ref('dependent').child(res.user.uid).once('value', (snapshot) => {
                        // for (const key in snapshot.val()) {
                        //       if (snapshot.val().hasOwnProperty(key)) {
                        //             const element = snapshot.val()[key];
                        //             if (key === res.user.uid) {
                                          // window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          this.store.setItem('hoa-role', snapshot.val().role);
                                          // if (this.platform.is('android') || this.platform.is('ios')) {
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role); // REMOVE BEFORE BUILD
                                          //       this.store.setItem('hoa-role', snapshot.val().role).then(() => {
                                          //             console.log('ROLE SAVED');
                                          //       }).catch((err: Error) => {
                                          //             console.error(err.message);
                                          //       });
                                          // } else if (this.platform.is('mobileweb')) {
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // } else {
                                          //       console.log('Not running on browser or native device');
                                          //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                                          // }
                                          this.isLoading = false;
                                          this.toast.showToast(`Welcome Back ${snapshot.val().fullname.split(' ')[0]}`, '2000', 'bottom');
                                    // } else {
                                          console.log('User is a ' + snapshot.val().role);
                        //             }
                        //       }
                        // }
                  }).then(() => {
                        if (window.localStorage.getItem('hoa-role')) {
                              this.router.navigate(['app/activity']);
                        }
                  });
            }
            // firebase.database().ref('security').once('value', (snapshot) => {
            //       for (const key in snapshot.val()) {
            //             if (snapshot.val().hasOwnProperty(key)) {
            //                   const element = snapshot.val()[key];
            //                   if (key === res.user.uid) {
            //                         window.localStorage.setItem('hoa-role', element.role);
            //                   } else {
            //                         console.log('User is not a security personnel');
            //                   }
            //             }
            //       }
            // });
            // this.store.set('hoa-role', role);
      }).catch((err: Error) => {
            console.error(err.message);
            this.toast.showToast(`${err.message}`, '4000', 'bottom');
            this.isLoading = false;
      });
  }

//   showToast(msg: string, dur: string, pos: string) {
//       this.toast.show(msg, dur, pos).subscribe(
//             toast => {
//               console.log(toast);
//             }
//           );
//   }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    console.log('facebook login');
    this.router.navigate(['app/activity']);
  }

  doGoogleLogin(): void {
    console.log('google login');
    this.router.navigate(['app/activity']);
  }

  doTwitterLogin(): void {
    console.log('twitter login');
    this.router.navigate(['app/activity']);
  }
}
