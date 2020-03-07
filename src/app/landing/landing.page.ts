import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router: Router) { }

  toActivity() {
        this.router.navigate(['app/activity']);
  }

  toCarpooling() {
        this.router.navigate(['app/carpooling/home']);
  }

  toEmergency() {
        this.router.navigate(['app/emergency']);
  }

  toPlacard() {
        this.router.navigate(['app/notifications']);
  }

  ngOnInit() {
  }

}
