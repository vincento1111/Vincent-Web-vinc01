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
      
      <form>
      <!-- name -->
      <div class="field">
        <label class="label">Name</label>
        <input type="text" name="name" class="input">
      </div>
      <!-- email -->
      <div class="field">
        <label class="label">Email</label>
        <input type="email" name="email" class="input">
      </div>
      <!-- messsage -->
      <div class="field">
      <label class="label">Your message</label>
      <textarea name="message" class="textarea"></textarea>
      </div>

      </form>

      <!-- submit button -->

      <button type="submit" class="button is-large is-warning">
        send

  `,
  styles: []
})
export class ContactComponent implements OnInit {
  
  name: any;
  email: any;
  message: any;
  constructor() { }

  ngOnInit(): void {

    //create api call?
    //create the form based on api fields?
  }

}
