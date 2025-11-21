import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelComponent } from "../panel/panel";
import { BudgetService } from '../services/budget';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class HomeComponent {

  productForm: FormGroup;
  Seo: FormControl = new FormControl(false);
  Ads: FormControl = new FormControl(false);
  Web: FormControl = new FormControl(false);

  pages : number = 1;
  languages : number = 1;

  result : number = 0;

  constructor(private budgetService: BudgetService){
    this.productForm = new FormGroup({
      Seo: this.Seo,
      Ads: this.Ads,
      Web: this.Web,
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
  
  ngOnInit(): void {
    this.productForm.valueChanges.subscribe((values) => {
      this.calculateTotal();
    })
  }
  
}
