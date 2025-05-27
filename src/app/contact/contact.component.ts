import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData={
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  constructor(private router: Router, private http: HttpClient) {}

  onSubmit(){
    const headers = { 'Content-Type': 'application/json' };
    
    this.http.post('http://127.0.0.1:8000/contact', this.formData)
      .subscribe({
        next: (response: any) => {
          console.log('Form submitted successfully', response);
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
        },
        error: (error: any) => {
          console.error('Error submitting form:', error.error);
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
        }
      });
  }
}
