(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-group-book-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-group/book-group.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-group/book-group.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <!-- <ion-menu-button></ion-menu-button> -->\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Book Group Guests</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"book-guest-content\">\n    <ion-list lines='full'>\n        <ion-item>\n            <ion-label stacked>Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='fullname'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Phone Number</ion-label>\n            <ion-input type=\"tel\" [(ngModel)]='phone'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Reason For Visit</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='reason'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" [(ngModel)]='gender'>\n                <ion-select-option value=\"f\">Female</ion-select-option>\n                <ion-select-option value=\"m\">Male</ion-select-option>\n                <ion-select-option value=\"other\">Other</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <!-- <ion-item>\n            <ion-label stacked>Vehicle Make</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='vehicleMake'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Vehicle Reg Number</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='vehicleRegNum'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Vehicle Color</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='vehicleColor'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Comments</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='comments'></ion-input>\n        </ion-item> -->\n        <ion-item>\n            <ion-label>Guest Confirmation</ion-label>\n            <ion-toggle [(ngModel)]=\"isConfirmed\"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <ion-text color='secondary' style=\"padding: 15px\">Guests: {{guests.length}}</ion-text>\n    <br>\n    <ion-list lines='full'>\n        <p style=\"margin-left: 15px;\" *ngFor='let guest of guests; let i = index'>{{i + 1}}. {{guest.fullname}}</p>\n    </ion-list>\n    <ion-button expand='block' fill='solid' (click)='addGuest()' [disabled]='fullname == \"\" || fullname === undefined'>\n        <ion-spinner *ngIf='addingGuest'></ion-spinner>\n        <ion-text *ngIf='addingGuest'>Adding Guest...</ion-text>\n        <ion-text *ngIf='!addingGuest'>Add Guest</ion-text>\n    </ion-button>\n    <ion-button expand='block' fill='solid' (click)='bookGroupGuests()' *ngIf='guests.length > 1' [disabled]='isLoading || guests.length < 1'>\n        <ion-spinner *ngIf='isLoading'></ion-spinner>\n        <ion-text *ngIf='isLoading'>Booking Guests...</ion-text>\n        <ion-text *ngIf='!isLoading'>Book Guests</ion-text>\n    </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/book-group/book-group.module.ts":
/*!*************************************************!*\
  !*** ./src/app/book-group/book-group.module.ts ***!
  \*************************************************/
/*! exports provided: BookGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookGroupPageModule", function() { return BookGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _book_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-group.page */ "./src/app/book-group/book-group.page.ts");







const routes = [
    {
        path: '',
        component: _book_group_page__WEBPACK_IMPORTED_MODULE_6__["BookGroupPage"]
    }
];
let BookGroupPageModule = class BookGroupPageModule {
};
BookGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_book_group_page__WEBPACK_IMPORTED_MODULE_6__["BookGroupPage"]]
    })
], BookGroupPageModule);



/***/ }),

/***/ "./src/app/book-group/book-group.page.scss":
/*!*************************************************!*\
  !*** ./src/app/book-group/book-group.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZ3JvdXAvYm9vay1ncm91cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/book-group/book-group.page.ts":
/*!***********************************************!*\
  !*** ./src/app/book-group/book-group.page.ts ***!
  \***********************************************/
/*! exports provided: BookGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookGroupPage", function() { return BookGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");











let BookGroupPage = class BookGroupPage {
    constructor(store, toast, alert, router, socialSharing, geoLocation) {
        this.store = store;
        this.toast = toast;
        this.alert = alert;
        this.router = router;
        this.socialSharing = socialSharing;
        this.geoLocation = geoLocation;
        this.guests = [];
        this.addingGuest = false;
        this.isLoading = false;
        this.isConfirmed = false;
        this.guestCode = 0;
        this.location = '';
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Guest name is required.' }
            ],
            'phone': [
                { type: 'required', message: 'Guest phone number is required' }
            ],
            'gender': [
                { type: 'required', message: 'Please specify a gender' }
            ],
            'reason': [
                { type: 'required', message: 'Please specify a gender' }
            ]
        };
        this.getProfile();
        this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        //   INIT FORM
        this.guestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'reason': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    }
    addGuest() {
        this.addingGuest = true;
        const guest = {
            fullname: this.fullname,
            phone: this.phone,
            gender: this.gender,
        };
        this.guests.push(guest);
        this.resetInputs();
        this.addingGuest = false;
    }
    resetInputs() {
        this.fullname = '';
        this.phone = '';
        this.gender = '';
        // this.vehicleMake = '';
        // this.vehicleRegNum = '';
        // this.vehicleColor = '';
        // this.comments = '';
    }
    bookGroupGuests() {
        // BOOK ALL GUESTS
        // ASK HOW TO DISPLAY GROUP GUESTS
        this.isLoading = true;
        // ADD GUEST TO USER'S GUESTS ROUTE
        const uid = this.store.getItem('hoa-uid');
        const role = this.store.getItem('hoa-role');
        const date = Date.now();
        let data;
        // console
        let confirmed;
        if (this.isConfirmed) {
            // confirmed = new Date();
            data = {
                // fullname: this.guestForm.get('name').value,
                // phone: this.guestForm.get('phone').value,
                // gender: this.guestForm.get('gender').value,
                // vehicleMake: this.guestForm.get('vehicleMake').value,
                // vehicleRegNum: this.guestForm.get('vehicleRegNum').value,
                // vehicleColor: this.guestForm.get('vehicleColor').value,
                // comments: this.guestForm.get('comments').value,
                guest: this.guests,
                confirmed: date,
                status: 'Confirmed',
                bookedAt: date,
                bookedBy: uid,
                inAt: 'N/A',
                leavingAt: 'N/A',
                outAt: 'N/A',
                return: false,
                detain: false,
                reason: this.reason,
                guestCode: this.guestCode
            };
        }
        else {
            data = {
                // fullname: this.guestForm.get('name').value,
                // phone: this.guestForm.get('phone').value,
                // gender: this.guestForm.get('gender').value,
                // vehicleMake: this.guestForm.get('vehicleMake').value,
                // vehicleRegNum: this.guestForm.get('vehicleRegNum').value,
                // vehicleColor: this.guestForm.get('vehicleColor').value,
                // comments: this.guestForm.get('comments').value,
                guest: this.guests,
                confirmed: 'N/A',
                status: 'Booked',
                bookedAt: date,
                bookedby: uid,
                inAt: 'N/A',
                leavingAt: 'N/A',
                outAt: 'N/A',
                return: false,
                detain: false,
                reason: this.reason,
                guestCode: this.guestCode
            };
        }
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref(`${role}/${uid}`).child('visitors').push(data).then((res) => {
            console.log('Added to user route successfully');
            // ADD GUEST TO GENERAL VISITOR'S NODE FOR SECURITY
            firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('Visitors').child(res.key).set(data).then(() => {
                // tslint:disable-next-line:max-line-length
                const presentAlert = this.alert.presentGroupShareAlert(`Share Booking With Guests?`, this.guests, this.guestCode, this.profile, this.location);
                console.log('Added to Visitor\'s route for security');
                this.router.navigate(['app/activity']);
                this.toast.showToast('Guests Booked', '2000', 'bottom');
                this.isLoading = false;
            }).catch((err) => {
                console.error(err.message);
                this.toast.showToast(err.message, '4000', 'bottom');
                this.isLoading = false;
            });
            // ADD TO RESIDENT'S ESTATE VISITORS ROUTE /Estates/{estateUID}/visitors/{UID}
            firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref(`Estates/${this.profile.estateUID}`).child('visitors').push(res.key).then(() => {
                console.log('Visitor UID added to Estate route');
            }, (err) => {
                console.log(err);
            }).catch((err) => {
                console.log(err.message);
            });
            // ADD TO DEPENDENT'S SUPER IF ROLE === dependent
            if (role === 'dependent') {
                firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref(`resident/${this.dependentOn.uid}/dependents/${uid}`).child('visitors').push(data).then(() => {
                    console.log('Guest added to dependent under super');
                    this.toast.showToast('Guests Booked', '2000', 'bottom');
                    this.isLoading = false;
                }).catch((err) => {
                    console.error(err.message);
                    this.toast.showToast(err.message, '4000', 'bottom');
                    this.isLoading = false;
                });
            }
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
            this.isLoading = false;
        });
    }
    getDependentOn() {
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref(`resident/${this.profile.dependentOn}`).once('value', (snapshot) => {
            console.log('Retrieved dependentOn');
            this.dependentOn = snapshot.val();
        }).catch((err) => {
            console.error(err.message);
        });
    }
    getLocation() {
        const options = {
            enableHighAccuracy: true
        };
        this.geoLocation.getCurrentPosition(options).then((res) => {
            this.location = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            };
        }).catch((err) => {
            console.log(err.message);
        });
    }
    getProfile() {
        let role, uid;
        uid = this.store.getItem('hoa-uid');
        role = this.store.getItem('hoa-role');
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref(role).child(uid).once('value', (snapshot) => {
            this.profile = snapshot.val();
            // GET DEPENDENT ON IF ROLE === DEPENDENT
            if (role === 'dependent') {
                this.getDependentOn();
            }
        }).then(() => {
            console.log('Profile retrieved successfully');
            // this.toast.showToast('Profile retrieved', '2000', 'bottom');
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
        });
    }
    shareBooking() {
        // SHARE BOOKING TO VISITOR
        // USING IONIC-NATIVE
        const message = `Dear ${this.guestForm.get('name').value}, your access code into ${this.profile.estateName} is ${this.guestCode}.
      Kindly present access code on arrival.
      Host: ${this.profile.fullname}
      Direction: ${this.location.lng},${this.location.lat}`;
        this.socialSharing.share(message).then(() => {
            this.toast.showToast('Booking Shared', '2000', 'bottom');
        }).catch((err) => {
            this.toast.showToast(err.message, '4000', 'bottom');
        });
    }
    ngOnInit() {
        //   CHECK IF GUESTCODE ALREADY EXISTS
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('Visitors').once('value', (snap) => {
            if (snap.val()) {
                for (const key in snap.val()) {
                    if (snap.val().hasOwnProperty(key)) {
                        const visitor = snap.val()[key];
                        if (visitor.status === 'In' && visitor.guestCode === this.guestCode) {
                            console.log('Code exists', this.guestCode);
                            this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                        }
                        else {
                            console.log('Code available', this.guestCode);
                            this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                        }
                    }
                }
            }
            else {
                console.log('No snap');
                this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                console.log('Guest Code', this.guestCode);
            }
        });
    }
};
BookGroupPage.ctorParameters = () => [
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_6__["HoaStoreService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] }
];
BookGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-group.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-group/book-group.page.html")).default,
        providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_6__["HoaStoreService"], _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-group.page.scss */ "./src/app/book-group/book-group.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hoa_store_service__WEBPACK_IMPORTED_MODULE_6__["HoaStoreService"],
        _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]])
], BookGroupPage);



/***/ })

}]);
//# sourceMappingURL=book-group-book-group-module-es2015.js.map