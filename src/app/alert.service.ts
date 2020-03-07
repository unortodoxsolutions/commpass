import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { HoaStoreService } from '../hoa-store.service';
import { ToastService } from './toast.service';
import { UrlShortenerService } from './url-shortener.service';

// import { tiny } from 'tiny-shortener';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController,
              private toast: ToastService,
              private urlShort: UrlShortenerService,
              private socialSharing: SocialSharing) { }

  async presentShareAlert(msg: string, form: FormGroup, code: number, profile: any, location: any) {
        console.log(location);
      const alert = await this.alertCtrl.create({
            // header: 'Confirm!',
            message: msg,
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                cssClass: 'primary',
                handler: () => {
                  console.log('Confirm Cancel: blah');
                  // return false;
                }
              }, {
                text: 'Yes',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Okay');
                  this.shareBooking(form, code, profile, location);
                  // return true;
                }
              }
            ]
          });

          await alert.present();
  }

  async presentGroupShareAlert(msg: string, guests: Array<any>, code: number, profile: any, location: any) {
        console.log(location);
      const alert = await this.alertCtrl.create({
            // header: 'Confirm!',
            message: msg,
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                cssClass: 'primary',
                handler: () => {
                  console.log('Confirm Cancel: blah');
                  // return false;
                }
              }, {
                text: 'Yes',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Okay');
                  this.shareGroupBooking(guests, code, profile, location);
                  // return true;
                }
              }
            ]
          });

          await alert.present();
  }

  async shareBooking(form: FormGroup, code: number, profile: any, location: any) {
      // SHARE BOOKING VIA SMS TO VISITOR
      // USING IONIC-NATIVE
      const short_url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
      // SHORTEN URL
      // let short_url;
      // // tslint:disable-next-line:max-line-length
      // this.urlShort.shortenURL(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`).subscribe((res: any) => {
      //       short_url = res.id;
      //       console.log('short_url', res.id);
      // });
      // tslint:disable-next-line:max-line-length
      // const short_url = <string> await tiny(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`).catch((error: Error) => console.error(error));

      // tslint:disable-next-line:max-line-length
      const message = `Dear ${form.get('name').value}, your access code into ${profile.estateName} is ${code}.\nKindly present access code on arrival.\nHost: ${profile.fullname}\nDirection: https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}\n\nPowered by CommPass`;
      this.socialSharing.share(message).then(() => {
            this.toast.showToast('Booking Shared', '2000', 'bottom');
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
      });
      // const message = `Hey ${form.get('name').value}, you\'re booked. Your serial number is: ${code}`;
      // this.socialSharing.share(message).then(() => {
      //       this.toast.showToast('Booking Shared', '2000', 'bottom');
      // }).catch((err: Error) => {
      //       this.toast.showToast(err.message, '4000', 'bottom');
      // });
}

async shareGroupBooking(guests: Array<any>, code: number, profile: any, location: any) {
      // SHARE BOOKING VIA SMS TO VISITOR
      // USING IONIC-NATIVE
      const short_url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
      // SHORTEN URL
      // let short_url;
      // // tslint:disable-next-line:max-line-length
      // this.urlShort.shortenURL(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`).subscribe((res: any) => {
      //       short_url = res.id;
      //       console.log('short_url', res.id);
      // });
      // tslint:disable-next-line:max-line-length
      const message = `Dear guest, your access code into ${profile.estateName} is ${code}.\nKindly present access code on arrival.\nHost: ${profile.fullname}\nDirection: https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}\n\nPowered by CommPass`;
      //       let phoneNumbers = '';
      // guests.forEach((guest) => {
      //       phoneNumbers += `${guest.phone},`;
      // });
      // SHARE VIA SOCIAL MEDIA
      this.socialSharing.share(message).then(() => {
            this.toast.showToast('Booking Shared', '2000', 'bottom');
      }).catch((err: Error) => {
            this.toast.showToast(err.message, '4000', 'bottom');
      });
      // const message = `Hey ${form.get('name').value}, you\'re booked. Your serial number is: ${code}`;
      // this.socialSharing.share(message).then(() => {
      //       this.toast.showToast('Booking Shared', '2000', 'bottom');
      // }).catch((err: Error) => {
      //       this.toast.showToast(err.message, '4000', 'bottom');
      // });
}

}
