import { Component } from '@angular/core';
import { HoaStoreService } from '../hoa-store.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: [
    './styles/tabs.page.scss'
  ],
  providers: [HoaStoreService]
})
export class TabsPage  {

      role;

  constructor(public menu: MenuController,
              private store: HoaStoreService) {
        this.role = this.store.getItem('hoa-role');
   }

  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
