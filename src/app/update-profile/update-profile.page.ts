import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HoaStoreService } from '../hoa-store.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
  providers: [HoaStoreService]
})
export class UpdateProfilePage implements OnInit {
      updateForm: FormGroup;
      role =  window.localStorage.getItem('hoa-role');
      validation_messages = {
            'fullname': [
                  { type: 'required', message: 'Fullname is required.' }
            ],
            'estateName': [
                  { type: 'required', message: 'Estate Name is required.' }
            ],
            'estateAptNum': [
                  { type: 'required', message: 'Apartment Number is required.' }
            ],
            'email': [
              { type: 'required', message: 'Email is required.' },
              { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'address': [
                  { type: 'required', message: 'Address is required.' }
            ],
            'gender': [
                  { type: 'required', message: 'Please indicate a gender.' }
            ],
            'maritalStatus': [
                  { type: 'required', message: 'This field is required.' }
            ],
            'about': [
                  { type: 'required', message: 'A little about yourself.'}
            ]
          };
      // estateName = '';
      // estateAptNum = '';
      // email = '';
      // address = '';
      // gender = '';
      // maritalStatus = '';
      // about = '';
      // fullname = '';
      estates: any[] = [];
      isLoading = false;
  constructor(private router: Router,
              private store: HoaStoreService) {
        this.getestates(); // get estates
        this.getProfile(); // get profile for editing
        this.updateForm = new FormGroup({
            'fullname': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'estateName': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'estateAptNum': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'email': new FormControl('', Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'address': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'gender': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'maritalStatus': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'about': new FormControl('', Validators.compose([
                  Validators.required
            ]))
          });
   }

updateProfile() {
      this.isLoading = true;
      // firebase.auth().currentUser.displayName = this.fullname;
      const role = this.store.getItem('hoa-role').toString();
      const uid = this.store.getItem('hoa-uid').toString();

      firebase.database().ref(role).child(uid).update({
            estateName: this.updateForm.get('estateName').value,
            estateAptNum: this.updateForm.get('estateAptNum').value,
            email: this.updateForm.get('email').value,
            address: this.updateForm.get('address').value,
            gender: this.updateForm.get('gender').value,
            maritalStatus: this.updateForm.get('maritalStatus').value,
            about: this.updateForm.get('about').value,
            fullname: this.updateForm.get('fullname').value
      }).then(() => {
            console.log('User updated');
            this.isLoading = false;
            this.router.navigate(['app/user']);
      }).catch((err: Error) => {
            console.error(err.message);
            this.isLoading = false;
      });
}

getestates() {
      firebase.database().ref('Estates').once('value', (snapshot) => {
            for (const key in snapshot.val()) {
                  if (snapshot.val().hasOwnProperty(key)) {
                        const estate = snapshot.val()[key];
                        this.estates.push(estate);
                  }
            }
      }, (err: Error) => {
            console.error(err.message);
      });
}

getProfile() {
      let role, uid;
      role = this.store.getItem('hoa-role');
      uid = this.store.getItem('hoa-uid');
      firebase.database().ref(role).child(uid).once('value', (snapshot) => {
            // SET INPUT TO APPROPRIATE SNAPSHOT VALUE
            this.updateForm.get('fullname').setValue(snapshot.val().fullname || '');
            this.updateForm.get('estateName').setValue(snapshot.val().estateName || '');
            this.updateForm.get('estateAptNum').setValue(snapshot.val().estateAptNum || '');
            this.updateForm.get('email').setValue(snapshot.val().email || '');
            this.updateForm.get('address').setValue(snapshot.val().address || '');
            this.updateForm.get('gender').setValue(snapshot.val().gender || '');
            this.updateForm.get('maritalStatus').setValue(snapshot.val().maritalStatus || '');
            this.updateForm.get('about').setValue(snapshot.val().about || '');
            // this.profile = snapshot.val();
            // this.visitors = [];
            // this.dependents = [];
            // GET DEPENDENT ON IF ROLE === DEPENDENT
            // if (role === 'dependent') {
            //       this.getDependentOn();
            // }
            // // GET VISITORS
            // for (const key in snapshot.val().visitors) {
            //       if (snapshot.val().visitors.hasOwnProperty(key)) {
            //             const visitor = snapshot.val().visitors[key];
            //             this.visitorsKeys.push(key);
            //             this.visitors.push(visitor);
            //             // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
            //             //       this.visitors.push(snap.val());
            //             // });
            //       }
            // }
            // // GET DEPENDENTS
            // for (const key in snapshot.val().dependents) {
            //       if (snapshot.val().dependents.hasOwnProperty(key)) {
            //             const dependent = snapshot.val().dependents[key];
            //             this.dependentsKeys.push(key);
            //             this.dependents.push(dependent);
            //             // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
            //             //       this.visitors.push(snap.val());
            //             // });
            //       }
            // }
      }).then(() => {
            console.log('Profile retrieved successfully');
      }).catch((err: Error) => {
            console.error(err.message);
      });
  }

  ngOnInit() {
  }

}
