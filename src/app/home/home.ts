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

  result : number = 0;

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe((values) => {
      const Seo = values.Seo ? 300 : 0;
      const Ads = values.Ads ? 400 : 0;
      const Web = values.Web ? 500 : 0;

      this.result = Seo + Ads + Web;
    })
  }
}
