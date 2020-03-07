import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Storage } from '@ionic/storage';

import { UserProfileModel } from './user-profile.model';
import { AlertController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps, Geocoder, GeocoderRequest, GeocoderResult, BaseArrayClass } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { LanguageService } from '../../language/language.service';
import { TranslateService } from '@ngx-translate/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { HoaStoreService } from '../../hoa-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: [
    './styles/user-profile.page.scss',
    './styles/user-profile.shell.scss',
    './styles/user-profile.ios.scss',
    './styles/user-profile.md.scss'
  ],
  providers: [HoaStoreService]
})
export class UserProfilePage implements OnInit {
//   profile: UserProfileModel;
profile: any = {};
profilePic: any;
  available_languages = [];
  translations: any;
  dependents: any[] = [];
  dependentsKeys: any[] = [];

  visitors: any[] = [];
  visitorsKeys: any[] = [];

  segment = 'visitors';
  dependentOn: any = '';
  address = '';
  role;
  uid;
  estateName;

  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    public languageService: LanguageService,
    public alertController: AlertController,
    private router: Router,
    private store: HoaStoreService,
    private toast: Toast,
    private imagePicker: ImagePicker,
    private geolocation: Geolocation,
    private gmaps: GoogleMaps,
    private geocoder: Geocoder,
    private nativeG: NativeGeocoder
  ) {
      //   this.role = window.localStorage.getItem('hoa-role');
      //   this.uid = window.localStorage.getItem('hoa-uid');
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
      //   this.getLocation();
  }

  ionViewDidEnter() {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
        this.getTranslations();
  }


  ngOnInit(): void {
      this.role = this.store.getItem('hoa-role');
      this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
        this.getTranslations();
//     this.route.data.subscribe((resolvedRouteData) => {
//       const profileDataStore = resolvedRouteData['data'];

//       profileDataStore.state.subscribe(
//         (state) => {
//           this.profile = state;

//           // get translations for this page to use in the Language Chooser Alert
//           this.getTranslations();

//           this.translate.onLangChange.subscribe(() => {
//             this.getTranslations();
//           });
//         },
//         (error) => {}
//       );
//     },
//     (error) => {});
  }

  addProfileImg() {
      //   UPLOAD PROFILE PICTURE USING IMAGEPICKER
      const options: ImagePickerOptions = {
            allow_video: false,
            maximumImagesCount: 1,
            outputType: 1
      };

      this.imagePicker.getPictures(options).then((result) => {
            this.toast.show('Uploading Profile Image', 'short', 'bottom');
            const uploadTask = firebase.storage().ref(`${this.role}/${this.uid}`).child('profilePic').putString(result);

            uploadTask.on('state_changed', (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                      console.log('Upload is paused');
                      break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                      console.log('Upload is running');
                      break;
                  }
                }, (err: Error) => {
                  // Handle unsuccessful uploads
                    this.toast.show(err.message, 'long', 'bottom');
                }, () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        // SET USER'S PROFILE PIC
                        firebase.database().ref(`${this.role}/${this.uid}`).child('profilePic').set(downloadURL);
                    console.log('File available at', downloadURL);
                    this.toast.show('Profile Image changed', 'short', 'bottom');
                  });
                });
          }, (err: Error) => {
                this.toast.show(err.message, 'long', 'bottom');
           }).catch((err: Error) => {
                  this.toast.show(err.message, 'long', 'bottom');
           });
  }

  editProfile() {
      // ROUTE USER TO UPDATE-PROFILE PAGE
      this.router.navigate(['update-profile']);
  }

  getLocation() {
      // GET USER'S LOCATION AND REVERSE GEOCODE TO GET ADDRESS
      this.geolocation.getCurrentPosition().then((pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            let resultArray;
            const options: NativeGeocoderOptions = {
                  useLocale: true,
                  maxResults: 5
            };
            this.nativeG.reverseGeocode(lat, lng, options).then((result: NativeGeocoderResult[]) => {
                  resultArray = result[0];
                  this.address = result[0].subLocality;
                  this.showToast('Location Retrieved', '2000', 'bottom');
            }).catch((err: Error) => {
                  this.showToast(err.message, '4000', 'bottom');
            });
            // const request: GeocoderRequest = {
            //       position: {lat: lat, lng: lng}
            // };
            // this.geocoder.geocode(request).then((res: BaseArrayClass<GeocoderResult[]>) => {
            //       this.showToast('Got BaseArrayClass<GeocoderResult[]>', '2000', 'bottom');
            //       res.one('finish').then(() => {
            //             this.showToast('finished', '2000', 'bottom');
            //             resultArray = res.getArray();
            //             this.address = resultArray[0].formatted_address;
            //             console.log(resultArray);
            //             this.showToast(resultArray[0].join(','), '10000', 'top');
            //             this.showToast('Address Retrieved', '2000', 'bottom');
            //       });
            // });
      }).catch((err: Error) => {
            this.showToast(err.message, '4000', 'bottom');
      });
  }

  getProfile() {
      let role, uid;
      role = this.store.getItem('hoa-role');
      uid = this.store.getItem('hoa-uid');
      firebase.database().ref(role).child(uid).once('value', (snapshot) => {
            this.profile = snapshot.val();
            this.profilePic = snapshot.val().profilePic || 'https://picsum.photos/200';
            this.address = snapshot.val().address;
            this.visitors = [];
            this.dependents = [];
            // GET ESTATE NAME
            firebase.database().ref('Estates').child(snapshot.val().estateUID).once('value', (estate) => {
                  this.estateName = estate.val().name || '';
            });
            // GET DEPENDENT ON IF ROLE === DEPENDENT
            if (role === 'dependent') {
                  this.getDependentOn();
            }
            // GET VISITORS
            for (const key in snapshot.val().visitors) {
                  if (snapshot.val().visitors.hasOwnProperty(key)) {
                        const visitor = snapshot.val().visitors[key];
                        this.visitorsKeys.push(key);
                        this.visitors.push(visitor);
                        // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
                        //       this.visitors.push(snap.val());
                        // });
                  }
            }
            // GET DEPENDENTS
            for (const key in snapshot.val().dependents) {
                  if (snapshot.val().dependents.hasOwnProperty(key)) {
                        const dependent = snapshot.val().dependents[key];
                        this.dependentsKeys.push(key);
                        this.dependents.push(dependent);
                        // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
                        //       this.visitors.push(snap.val());
                        // });
                  }
            }
      }).then(() => {
            console.log('Profile retrieved successfully');
      }).catch((err: Error) => {
            console.error(err.message);
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

  getVisitors() {

  }

  logOut() {
        this.store.clearStore();
        this.showToast('Log out successful', '3000', 'bottom');
        this.router.navigate(['walkthrough']);
  }

  toBookGuestPage() {
      this.router.navigate(['book-guest']);
  }

  toCreateDependent() {
      this.router.navigate(['add-dependent']);
  }

  showToast(msg: string, dur: string, pos: string) {
      this.toast.show(msg, dur, pos).subscribe(
            toast => {
              console.log(toast);
            }
          );
  }

  segmentChanged(ev) {
      //   console.log(ev);
      //   this.segment = ev;
  }

  viewVisitor(i: number) {
        console.log(this.visitorsKeys[i]);
      this.router.navigate(['details', this.visitorsKeys[i]]);
  }

  viewDependent(i: number) {
      console.log(this.dependentsKeys[i]);
      this.router.navigate(['dependent-details', this.dependentsKeys[i]]);
  }

  ngViewWillEnter() {
        this.getProfile();
  }

  getTranslations() {
    // get translations for this page to use in the Language Chooser Alert
    this.translate.getTranslation(this.translate.currentLang)
    .subscribe((translations) => {
      this.translations = translations;
    });
  }

  async openLanguageChooser() {
    this.available_languages = this.languageService.getLanguages()
    .map(item =>
      ({
        name: item.name,
        type: 'radio',
        label: item.name,
        value: item.code,
        checked: item.code === this.translate.currentLang
      })
    );

    const alert = await this.alertController.create({
      header: this.translations.SELECT_LANGUAGE,
      inputs: this.available_languages,
      cssClass: 'language-alert',
      buttons: [
        {
          text: this.translations.CANCEL,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: this.translations.OK,
          handler: (data) => {
            if (data) {
              this.translate.use(data);
            }
          }
        }
      ]
    });
    await alert.present();

  }
}
