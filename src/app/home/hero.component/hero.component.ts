import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class HeroComponent {
  minDate: string;

  constructor(private router: Router) {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    this.minDate = date.toISOString().split('T')[0];
  }

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  openLinkedIn(event: Event) {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/yassine-ed-daïf/', '_blank', 'noopener');
  }

  sendEmail(form: any) {
    if (form.invalid) return;
    emailjs.send(
      'service_mthnte8',
      'template_7zzq0d2',
      {
        email: form.value.email,
        date: form.value.date,
        time: form.value.time,
        people: form.value.people
      },
      'rSa_KGh6azvpR_Khk'
    ).then(
      (_result: EmailJSResponseStatus) => {
        alert('Reservation request sent!');
        form.reset();
      },
      (_error) => {
        alert('Failed to send reservation.');
      }
    );
  }
}
