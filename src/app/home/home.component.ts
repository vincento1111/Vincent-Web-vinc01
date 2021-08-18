import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
    <h1 class="title">
      Welcome To My Homepage!
    </h1>
  </div>
</section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/bg-img.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
