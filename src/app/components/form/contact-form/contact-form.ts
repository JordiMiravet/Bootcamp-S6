import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css'],
  inputs: ['formContact']
})
export class ContactFormComponent {
  formContact!: FormGroup;
}

