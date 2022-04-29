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
      
      <form (ngSubmit)="submitForm()">
      <!-- name -->
      <div class="field">
        <label class="label">Name</label>
        <input 
        type="text"
        name="name"
        class="input"
        [(ngModel)]="name"
        required>
      </div>
      <!-- email -->
      <div class="field">
        <label class="label">Email</label>
        <input 
         type="email"
         name="email"
         class="input"
         [(ngModel)]="email">
      </div>
      <!-- messsage -->
      <div class="field">
      <label class="label">Your message</label>
      <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
      </div>
      
      <!-- submit button -->
      <button type="submit" class="button is-large is-warning"> send </button>
        

      </form>

  `,
  styles: []
})
export class ContactComponent implements OnInit {
  
  name: any;
  email: any;
  message: any;
  constructor() { }

  ngOnInit() {}

    submitForm() 
    {
      alert('i am testing submit form')
    }

    //create api call?
    //create the form based on api fields?
  

}
