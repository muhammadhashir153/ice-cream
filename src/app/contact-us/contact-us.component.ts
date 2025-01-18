import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Here you would typically send the form data to a server
    console.log('Form submitted', this.contactModel);
    // Reset the form after submission
    this.contactModel = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    // You might want to add a success message or redirect the user
    alert('Thank you for your message. We will get back to you soon!');
  }
}