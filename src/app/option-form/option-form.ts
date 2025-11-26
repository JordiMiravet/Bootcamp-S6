import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-option-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './option-form.html',
  styleUrls: ['./option-form.css'],
})

export class OptionForm {
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() formName!: FormControl;


  get id(): string {
    return 'option-' + this.title;
  }

}
