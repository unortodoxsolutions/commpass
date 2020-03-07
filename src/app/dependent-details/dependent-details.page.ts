import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HoaStoreService } from '../hoa-store.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-dependent-details',
  templateUrl: './dependent-details.page.html',
  styleUrls: ['./dependent-details.page.scss'],
  providers: [HoaStoreService]
})
export class DependentDetailsPage implements OnInit {

      dependent: any[] = [];
      role;
      uid;
      key;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: HoaStoreService) {

               }

  ngOnInit() {
      const uid = this.store.getItem('hoa-uid');
      const role = this.store.getItem('hoa-role');
      this.uid = uid;
      this.role = role;
      this.route.paramMap.subscribe((param) => {
            console.log('Param', param);
            const key = param.get('dependent');
            console.log('Key', key);
            this.key = key;
            // this.visitor = param.get('visitor');
            // if (role === 'resident') {
                  firebase.database().ref(`${role}/${uid}/dependents`).child(key).on('value', (snapshot) => {
                        this.dependent = snapshot.val();
                        console.log('Dependent', this.dependent);
                        // console.log('Snap', snapshot.val());
                  });
            // }
      });
  }

}
