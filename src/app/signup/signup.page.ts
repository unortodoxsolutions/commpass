import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { PasswordValidator } from '../validators/password.validator';

import { HoaStoreService } from '../hoa-store.service';

import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: [
    './styles/signup.page.scss'
  ],
  providers: [HoaStoreService]
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  matching_passwords_group: FormGroup;
  role: any;
  isLoading = false;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areNotEqual', message: 'Password mismatch' }
    ]
  };

  constructor(
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController,
    private store: HoaStoreService
  ) {
    this.matching_passwords_group = new FormGroup({
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      'confirm_password': new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areNotEqual(formGroup);
    });

    this.signupForm = new FormGroup({
      'email': new FormControl('test@test.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'matching_passwords': this.matching_passwords_group,
      'role': new FormControl('', Validators.compose([
                            Validators.required
                      ]))
    });

//     this.signupForm = new FormGroup({
//           'role': new FormControl('', Validators.compose([
//                 Validators.required
//           ]))
//     });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServicePage
    });
    return await modal.present();
  }

  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyPolicyPage
    });
    return await modal.present();
  }

  doSignup(): void {
        this.isLoading = true;
    console.log('do sign up');
//     SIGNUP WITH FIREBASE
      const email = this.signupForm.get('email').value;
      const password = this.matching_passwords_group.get('password').value;
      const role = this.signupForm.get('role').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
            console.log('Create RES', res);
            firebase.database().ref(role).child(res.user.uid).set({
                  email: email,
                  uid: res.user.uid,
                  role: role
            }).then(() => {
                  // this.store.ready().then(() => {
                  //       this.store.set('hoa-uid', res.user.uid);
                  //       this.store.set('hoa-role', role);
                  // });
                  this.store.setItem('hoa-uid', res.user.uid);
                  this.store.setItem('hoa-role', role);
                  // window.localStorage.setItem('hoa-uid', res.user.uid);
                  // window.localStorage.setItem('hoa-role', role);
                  console.log(role + ' registered in the DB');
                  if (role === 'resident') {
                        this.router.navigate(['/update-profile']);
                        this.isLoading = false;
                  }
                  if (role === 'security') {
                        // this.router.navigate(['app/categories']);
                        this.router.navigate(['/update-profile']);
                        this.isLoading = false;
                  }
            }).catch((err: Error) => {
                  console.error(err.message);
                  this.isLoading = false;
            });
      }).catch((err: Error) => {
            console.error(err.message);
            this.isLoading = false;
      });
  }

  doFacebookSignup(): void {
    console.log('facebook signup');
    this.router.navigate(['app/activity']);
  }

  doGoogleSignup(): void {
    console.log('google signup');
    this.router.navigate(['app/activity']);
  }

  doTwitterSignup(): void {
    console.log('twitter signup');
    this.router.navigate(['app/activity']);
  }
}
