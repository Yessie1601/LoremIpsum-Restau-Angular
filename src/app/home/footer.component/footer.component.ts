import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class FooterComponent {
  sendNewsletter(form: any) {
    if (form.invalid) return;
    emailjs.send(
      'service_mthnte8',
      'template_40q5mfm',
      { email: form.value.email },
      'rSa_KGh6azvpR_Khk'
    ).then(
      (_result: EmailJSResponseStatus) => {
        alert('Newsletter signup sent! => check your spam folder!');
        form.reset();
      },
      (_error) => {
        alert('Failed to send newsletter signup.');
      }
    );
  }
}
