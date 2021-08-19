import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="Title">Contact Us!</h1>
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">
      

    1. template
    
      <form>
      
      <div class="field">
        <label class="label">Email</label>
        <input type="text" name="name" class="input">
      </div>
      
      <div class="field">
        <label class="label">Email</label>
        <input type="text" name="name" class="input">
      </div>
      
      <div class="field">
      <label class="label">Email</label>
      <input type="text" name="name" class="input">
      </div>

      </form>


  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  //name;
  
  constructor() { }

  ngOnInit(): void {
  }

}
