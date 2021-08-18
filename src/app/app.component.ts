import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--header -->
  <app-header></app-header>

  <!-- contact component -->
  <app-contact> </app-contact>

  <!-- home page component -->
  <app-home> </app-home>

  <!-- routes go here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'Vincent-Web';
}
