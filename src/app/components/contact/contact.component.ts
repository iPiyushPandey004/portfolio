import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CONTACT_FORM_ENDPOINT } from '../../config/contact.config';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  website = '';
  submissionState: SubmissionState = 'idle';

  readonly formEndpoint = CONTACT_FORM_ENDPOINT;
  readonly emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

  async submitForm(form: NgForm): Promise<void> {
    if (form.invalid || !this.emailPattern.test(this.email.trim())) {
      form.control.markAllAsTouched();
      return;
    }

    // Formspree's honeypot field helps filter basic automated submissions.
    if (this.website.trim()) {
      this.resetForm(form);
      return;
    }

    if (!this.formEndpoint) {
      this.submissionState = 'not-configured';
      return;
    }

    this.submissionState = 'submitting';
    try {
      const response = await fetch(this.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: this.name.trim(),
          email: this.email.trim(),
          message: this.message.trim(),
          _subject: `Portfolio contact from ${this.name.trim()}`
        })
      });

      if (!response.ok) {
        this.submissionState = 'error';
        return;
      }

      this.submissionState = 'success';
      form.resetForm();
    } catch {
      this.submissionState = 'error';
    }
  }

  private resetForm(form: NgForm): void {
    form.resetForm();
    this.submissionState = 'idle';
  }
}
