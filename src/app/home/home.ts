import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {

  formulario: FormGroup;
  Seo: FormControl = new FormControl(false);
  Ads: FormControl = new FormControl(false);
  Web: FormControl = new FormControl(false);

  constructor(){
    this.formulario = new FormGroup({
      Seo: this.Seo,
      Ads: this.Ads,
      Web: this.Web,
    })
  }


  handleSubmit(): void {
    console.log(this.formulario.value);
  }
}
