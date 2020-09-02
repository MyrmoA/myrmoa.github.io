import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'myrmoa';
  constructor(private router: Router) {}

  ngOnInit() {}

  isHomeRoute() {
    return this.router.url === '/';
  }

  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean = false;

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  getHomeIntroText: string =
    "Welcome! My name is Arie Myrmo.<br/><br/> I am a software developer currently working for Arthrex, a global medical device company located in Southwest Florida. You can learn more about me <a routerLink='/about' routerLinkActive='active'>here</a>. I write here, occasionally speak at conferences, and work on a lot of different projects. You can learn more about me here. If you appreciate my work, consider becoming a sponsor.";
}
