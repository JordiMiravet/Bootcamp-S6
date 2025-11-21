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

  constructor(private budgetService: BudgetService){
    this.productForm = new FormGroup({
      Seo: this.Seo,
      Ads: this.Ads,
      Web: this.Web,
    })
  }

  result : number = 0;
  
  ngOnInit(): void {
    this.productForm.valueChanges.subscribe((values) => {
      const Seo = values.Seo ? this.budgetService.seoBasePrice : 0;
      const Ads = values.Ads ? this.budgetService.adsBasePrice : 0;
      const Web = values.Web ? this.budgetService.webBasePrice : 0;

      this.result = Seo + Ads + Web;
    })
  }
}
