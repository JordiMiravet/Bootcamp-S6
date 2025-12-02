import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: '[option-form]',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './option-form.html',
  styleUrls: ['./option-form.css'],
  inputs: ['title', 'description', 'price', 'formName'],
})

export class OptionForm {
  title!: string;
  description!: string;
  price!: number;
  formName!: FormControl;

  toggleCheckbox() {
    this.formName.setValue(!this.formName.value);
  }

}
