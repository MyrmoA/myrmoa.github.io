import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { NavDrawerComponent } from './components/nav-bar/nav-drawer/nav-drawer.component'
import { FooterComponent } from './components/footer/footer.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        AboutComponent,
        NavBarComponent,
        FooterComponent,
        NavDrawerComponent,
        ProjectsComponent
      ],
    }).compileComponents();
  }));

  // Sample Tests - to remove 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myrmoa'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myrmoa');
  });
});
