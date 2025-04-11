import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formata = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  constructor(private http: HttpClient) {}

  submitForm() {
    const params = new HttpParams()
      .set('name', this.formata.name)
      .set('email', this.formata.email)
      .set('subject', this.formata.subject)
      .set('message', this.formata.message);

    this.http.post('http://127.0.0.1:8000/contact', params.toString())
      .subscribe(response => {
        console.log('Form submitted successfully', response);
      });
  }
  
}
