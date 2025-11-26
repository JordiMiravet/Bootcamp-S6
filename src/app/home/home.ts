import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelComponent } from "../panel/panel";
import { ContactFormComponent } from "../contact-form/contact-form";
import { BudgetService } from '../services/budget';
import { OptionForm } from '../option-form/option-form';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    OptionForm,
    ContactFormComponent,
    PanelComponent
],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class HomeComponent {
  
  productForm: FormGroup;
  
  name: FormControl = new FormControl('', [ Validators.required, Validators.minLength(3) ]);
  telephone: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9) ]);
  email: FormControl = new FormControl('', [ Validators.required, Validators.email ])

  pages : number = 1;
  languages : number = 1;

  result : number = 0;

  constructor(public budgetService: BudgetService){
    this.productForm = new FormGroup({
      Seo: new FormControl(false),
      Ads: new FormControl(false),
      Web: new FormControl(false),

      pages: new FormControl(this.pages),
      languages: new FormControl(this.languages),

      name: this.name,
      telephone: this.telephone,
      email: this.email,
    })
  }

  get seoControl(): FormControl {
    return this.productForm.get('Seo') as FormControl;
  }

  get adsControl(): FormControl {
    return this.productForm.get('Ads') as FormControl;
  }

  get webControl(): FormControl {
    return this.productForm.get('Web') as FormControl;
  }

  updatePanelElements(event: { pages: number, languages: number}){
    this.pages = event.pages;
    this.languages = event.languages;
    this.calculateTotal();
  }

  onWebChange(): void {
    this.pages = 1;
    this.languages = 1;

    this.productForm.controls['pages'].setValue(this.pages);
    this.productForm.controls['languages'].setValue(this.languages);

    this.calculateTotal();
  }

  calculateTotal(): void{
    const Seo = this.productForm.get('Seo')!.value ? this.budgetService.seoBasePrice : 0;
    const Ads = this.productForm.get('Ads')!.value ? this.budgetService.adsBasePrice : 0;
    const Web = this.productForm.get('Web')!.value 
      ? this.budgetService.calculateTotalWeb(this.pages, this.languages) 
      : 0;

    this.result = Seo + Ads + Web;
  }

  ngOnInit(): void {
    this.productForm.valueChanges.subscribe(() => {
      this.calculateTotal();
    })
  }

  onSubmit(): void {
    if(this.productForm.valid){
      console.log(this.productForm.value)
    }
  }
}
