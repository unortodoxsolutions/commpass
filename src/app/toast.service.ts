import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: Toast) { }

  showToast(msg: string, dur: string, pos: string) {
      this.toast.show(msg, dur, pos).subscribe(
            toast => {
              console.log(toast);
            }
          );
  }
}
