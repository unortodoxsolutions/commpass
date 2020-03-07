import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { HoaStoreService } from './hoa-store.service';

const { SplashScreen } = Plugins;
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import 'firebase/analytics';
// import 'firebase/'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ],
  providers: [HoaStoreService]
})
export class AppComponent {
  appPages = [
      {
        title: 'Access Control',
        url: '/app/activity',
        icon: './assets/sample-icons/side-menu/categories.svg'
      },
          {
            title: 'Emergency',
            url: '/app/emergency',
            icon: './assets/sample-icons/side-menu/categories.svg'
          },
      {
        title: 'History',
        url: '/app/history',
        icon: './assets/sample-icons/side-menu/categories.svg'
      },
      {
        title: 'Placard',
        url: '/app/notifications',
        icon: './assets/sample-icons/side-menu/categories.svg'
      },
    {
      title: 'Profile',
      url: '/app/user',
      icon: './assets/sample-icons/side-menu/profile.svg'
    },
//     {
//       title: 'View In',
//       url: '/app/view-in',
//       icon: './assets/sample-icons/side-menu/categories.svg'
//     },
//     {
//       title: 'Contact Card',
//       url: '/contact-card',
//       icon: './assets/sample-icons/side-menu/contact-card.svg'
//     },
//     {
//       title: 'Notifications',
//       url: '/app/notifications',
//       icon: './assets/sample-icons/side-menu/notifications.svg'
//     }
  ];
  accountPages = [
    {
      title: 'Log In',
      url: '/auth/login',
      icon: './assets/sample-icons/side-menu/login.svg'
    },
    {
      title: 'Sign Up',
      url: '/auth/signup',
      icon: './assets/sample-icons/side-menu/signup.svg'
    },
    {
      title: 'Tutorial',
      url: '/walkthrough',
      icon: './assets/sample-icons/side-menu/tutorial.svg'
    },
    {
      title: 'Getting Started',
      url: '/getting-started',
      icon: './assets/sample-icons/side-menu/getting-started.svg'
    },
    {
      title: '404 page',
      url: '/page-not-found',
      icon: './assets/sample-icons/side-menu/warning.svg'
    }
  ];

  textDir = 'ltr';
  role;

  constructor(public translate: TranslateService,
              private router: Router,
              private store: HoaStoreService,
              private platform: Platform) {
                  this.platform.ready().then(() => {
                        this.role = this.store.getItem('hoa-role');
                        if (this.role !== undefined || this.role !== null) {
                              this.checkIfRegistered();
                        }
                        this.checkMediaPreference();
                  }).catch((err: Error) => {
                        console.error(err.message);
                  });
    this.initializeApp();
    this.setLanguage();
    firebase.initializeApp(environment.firebase);
    firebase.analytics();
  }

  async initializeApp() {
    try {
     await SplashScreen.hide();
    } catch (err) {
     console.log('This is normal in a browser', err);
    }
  }

  checkMediaPreference() {
        // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      this.toggleDarkTheme(prefersDark.matches);

      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));

  }

  // Add or remove the "dark" class based on if the media query matches
toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
}

  checkIfRegistered() {
        if (this.store.getItem('hoa-uid') !== null) {
              this.router.navigate(['app/home']);
        } else {
              console.log('User is not registered');
              this.router.navigate(['walkthrough']);
        }
  }

  setLanguage() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // this is to determine the text direction depending on the selected language
    // for the purpose of this example we determine that only arabic and hebrew are RTL.
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
    // });
  }

}
