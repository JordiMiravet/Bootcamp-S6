import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelComponent } from "../panel/panel";
import { BudgetService } from '../services/budget';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class HomeComponent {
  
  productForm: FormGroup;
  Seo: FormControl = new FormControl(false);
  Ads: FormControl = new FormControl(false);
  Web: FormControl = new FormControl(false);

  name: FormControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(3), 
  ]);
  telephone: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$'),
    Validators.minLength(9)
  ]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  pages : number = 1;
  languages : number = 1;

  result : number = 0;

  constructor(public budgetService: BudgetService){
    this.productForm = new FormGroup({
      Seo: this.Seo,
      Ads: this.Ads,
      Web: this.Web,

      pages: new FormControl(this.pages),
      languages: new FormControl(this.languages),

      name: this.name,
      telephone: this.telephone,
      email: this.email,
    })
  }

  updatePanelElements(event: { pages: number, languages: number}){
    this.pages = event.pages;
    this.languages = event.languages;
    this.calculateTotal();
  }
  
  calculateTotal(): void{
    const Seo = this.Seo.value ? this.budgetService.seoBasePrice : 0;
    const Ads = this.Ads.value ? this.budgetService.adsBasePrice : 0;
    const Web = this.Web.value 
      ? this.budgetService.calculateTotalWeb(this.pages, this.languages) 
      : 0;

    this.result = Seo + Ads + Web;
  }

  onWebChange(): void {
    if(!this.Web.value){
      this.pages = 1;
      this.languages = 1;

      this.productForm.controls['pages'].setValue(this.pages);
      this.productForm.controls['languages'].setValue(this.languages);

      this.calculateTotal();
    } else{
      this.calculateTotal();
    }
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
