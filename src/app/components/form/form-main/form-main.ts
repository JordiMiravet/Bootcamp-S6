import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionForm } from '../option-form/option-form';

import { HeaderComponent } from '../../../header/header';
import { BudgetService } from '../../../services/budget';
import { ContactFormComponent } from "../contact-form/contact-form";
import { PanelComponent } from "../panel/panel";
import { BudgetsList } from "../../budget/budgets-list/budgets-list";
import { BudgetItem } from '../../../models/budget-item.model';


@Component({
  selector: 'app-form-main',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    OptionForm,
    ContactFormComponent,
    PanelComponent,
    BudgetsList
],
  templateUrl: './form-main.html',
  styleUrls: ['./form-main.css'],
  inputs: ['userBudget']
})
export class FormMainComponent {

  productForm: FormGroup;

  seoSelected = signal(false);
  adsSelected = signal(false);
  webSelected = signal(false);

  pages = signal(1);
  languages = signal(1);

  // pasarlo a signals luego
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  telephone = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public budgetService: BudgetService) {
    this.productForm = new FormGroup({
      Seo: new FormControl(this.seoSelected()),
      Ads: new FormControl(this.adsSelected()),
      Web: new FormControl(this.webSelected()),

      pages: new FormControl(this.pages()),
      languages: new FormControl(this.languages()),

      name: this.name,
      telephone: this.telephone,
      email: this.email,
    });

    this.productForm.get('Seo')!.valueChanges.subscribe(value => this.seoSelected.set(value));
    this.productForm.get('Ads')!.valueChanges.subscribe(value => this.adsSelected.set(value));
    this.productForm.get('Web')!.valueChanges.subscribe(value => this.resetWeb(value));

    // modificar luego
    this.productForm.get('pages')!.valueChanges.subscribe(value => this.pages.set(value));
    this.productForm.get('languages')!.valueChanges.subscribe(value => this.languages.set(value));
  }

  get seoControl(): FormControl { return this.productForm.get('Seo') as FormControl; }
  get adsControl(): FormControl { return this.productForm.get('Ads') as FormControl; }
  get webControl(): FormControl { return this.productForm.get('Web') as FormControl; }

  result = computed(() => {
    const Seo = this.seoSelected() ? this.budgetService.seoBasePrice : 0;
    const Ads = this.adsSelected() ? this.budgetService.adsBasePrice : 0;
    const Web = this.webSelected()
      ? this.budgetService.calculateTotalWeb(this.pages(), this.languages())
      : 0;
      
    return Seo + Ads + Web;
  });

  updatePanelOptions(event: { pages: number; languages: number }) {
    this.pages.set(event.pages);
    this.languages.set(event.languages);

    this.productForm.controls['pages'].setValue(event.pages);
    this.productForm.controls['languages'].setValue(event.languages);
  }

  resetWeb(value: boolean) {
    this.webSelected.set(value);
    if (!value) {
      this.pages.set(1);
      this.languages.set(1);

      this.productForm.controls['pages'].setValue(1);
      this.productForm.controls['languages'].setValue(1);
    }
  }

  userBudget = () => {
    if (this.productForm.valid) {
      const budgetElement: BudgetItem = { ...this.productForm.value, budget: this.result() }
      console.log(budgetElement);

      this.budgetService.saveBudget(budgetElement);
    }
  }
}
