import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@NgModule({
  declarations: [
    NavBarComponent,
    NavDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
