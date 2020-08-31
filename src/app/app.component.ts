import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myrmoa';
  constructor(private router: Router) {}

  ngOnInit() {}

  isHomeRoute() {
    return this.router.url === '/';
  }

  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;
  
  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  getHomeText(): string {
    return "Welcome! My name is Arie Myrmo, I am a software developer currently working for Arthrex in Southwest Florida";
  }

}
