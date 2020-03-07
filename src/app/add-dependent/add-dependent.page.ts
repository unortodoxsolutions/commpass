import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { HoaStoreService } from '../hoa-store.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-add-dependent',
  templateUrl: './add-dependent.page.html',
  styleUrls: ['./add-dependent.page.scss'],
  providers: [HoaStoreService]
})
export class AddDependentPage implements OnInit {
      dependentForm: FormGroup;
      role;
      uid;
      isLoading = false;
      validation_messages = {
            'accountName': [
                  { type: 'required', message: 'Dependent name is required.' }
            ],
            'email': [
              { type: 'required', message: 'Email is required.' },
              { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'phone': [
                  { type: 'required', message: 'Dependent phone number is required' }
            ],
            'relationship': [
                  { type: 'required', message: 'Relationship with dependent is required'}
            ],
            'password': [
              { type: 'required', message: 'Password is required.' },
              { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
          };
  constructor(private router: Router,
              private store: HoaStoreService) {
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
      //   INIT FORM
        this.dependentForm = new FormGroup({
              'accountName': new FormControl('', Validators.compose([
                    Validators.required
              ])),
            'email': new FormControl('', Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'phone': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'relationship': new FormControl('', Validators.compose([
                  Validators.required
            ])),
            'password': new FormControl('', Validators.compose([
              Validators.minLength(6),
              Validators.required
            ]))
          });
   }


   addDependent(uid: any) {
      //    this.isLoading = true;
      //    INIT DEPENDENT
      const dependent = {
            fullname: this.dependentForm.get('accountName').value,
            email: this.dependentForm.get('email').value,
            phone: this.dependentForm.get('phone').value,
            relationship: this.dependentForm.get('relationship').value,
            password: this.dependentForm.get('password').value,
            dependentOn: this.uid,
            uid: uid,
            role: 'dependent',
            visitors: ''
      };
      // ADD DEPENDENT TO USER'S /dependent ROUTE
      firebase.database().ref(`${this.role}/${this.uid}`).child('dependents').push(dependent).then(() => {
            console.log('Dependent added to user route');
            this.isLoading = false;
            this.router.navigate(['app/user']);
      }).catch((err: Error) => {
            console.error(err.message);
      });
      // ADD DEPENDENT TO GENERAL ROUTE
      firebase.database().ref(`dependent/${uid}`).set(dependent).then(() => {
            console.log('Dependent added to general route');
      }).catch((err: Error) => {
            console.error(err.message);
      });
   }

   createDependentAccount() {
         this.isLoading = true;
         const email = this.dependentForm.get('email').value;
         const password = this.dependentForm.get('password').value;
      //    let uid;
      //    CREATE DEPENDENT'S AUTH ACCOUNT
      firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
            // uid = res.user.uid;
            this.addDependent(res.user.uid);
            console.log('Dependent created successfully');
      }).catch((err: Error) => {
            console.error(err.message);
      });

   }

  ngOnInit() {
  }

}
