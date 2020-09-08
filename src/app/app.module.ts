import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HeaderComponent, FooterComponent, ProjectsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
