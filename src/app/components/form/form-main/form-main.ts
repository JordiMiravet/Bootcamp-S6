import { Component, computed, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BudgetService } from '../../../services/budget';

import { OptionForm } from '../option-form/option-form';
import { ContactFormComponent } from "../contact-form/contact-form";
import { PanelComponent } from "../panel/panel";
import { BudgetItem } from '../../../models/budget-item.model';


@Component({
  selector: '[form-main]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    OptionForm,
    ContactFormComponent,
    PanelComponent,
],
  templateUrl: './form-main.html',
  styleUrls: ['./form-main.css'],
})
export class FormMainComponent implements OnInit {

  productForm: FormGroup;

  seoSelected = signal(false);
  adsSelected = signal(false);
  webSelected = signal(false);

  pages = signal(1);
  languages = signal(1);

  name = new FormControl('', [
    Validators.required, 
    Validators.minLength(3), 
    Validators.pattern('[a-zA-Z\s]+$')
  ]);
  telephone = new FormControl('', [
    Validators.required, 
    Validators.pattern('^([+]?\d{1,2}[-\s]?)?[9|6|7][0-9]{8}$([+]?\d{1,2}[-\s]?)?'), 
    Validators.minLength(9)]);
  email = new FormControl('', [
    Validators.required, 
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._-]+([a-zA-Z0-9_-]+)*@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/)
  ]);

  constructor(
    public budgetService: BudgetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    
    this.subscribeFormChanges();

  }

  private subscribeFormChanges(): void {
    this.productForm.get('Seo')!.valueChanges.subscribe(value => this.seoSelected.set(value));
    this.productForm.get('Ads')!.valueChanges.subscribe(value => this.adsSelected.set(value));
    this.productForm.get('Web')!.valueChanges.subscribe(value => this.resetWeb(value));

    this.productForm.get('pages')!.valueChanges.subscribe(value => this.pages.set(value));
    this.productForm.get('languages')!.valueChanges.subscribe(value => this.languages.set(value));


  this.productForm.valueChanges.subscribe(form => {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        Seo: form.Seo,
        Ads: form.Ads,
        Web: form.Web,
        pages: form.pages,
        languages: form.languages
      },
      queryParamsHandling: 'merge'
    });
  });
}
  get seoControl(): FormControl { return this.productForm.get('Seo') as FormControl; }
  get adsControl(): FormControl { return this.productForm.get('Ads') as FormControl; }
  get webControl(): FormControl { return this.productForm.get('Web') as FormControl; }

  result = computed(() : number => {
    const Seo = this.seoSelected() ? this.budgetService.seoBasePrice : 0;
    const Ads = this.adsSelected() ? this.budgetService.adsBasePrice : 0;
    const Web = this.webSelected()
      ? this.budgetService.calculateTotalWeb(this.pages(), this.languages())
      : 0;
      
    return Seo + Ads + Web;
  });

  updatePanelOptions(event: { pages: number; languages: number }): void {
    this.pages.set(event.pages);
    this.languages.set(event.languages);

    this.productForm.controls['pages'].setValue(event.pages);
    this.productForm.controls['languages'].setValue(event.languages);
  }

  resetWeb(value: boolean) : void {
    this.webSelected.set(value);
    if (!value) {
      this.pages.set(1);
      this.languages.set(1);

      this.productForm.controls['pages'].setValue(1);
      this.productForm.controls['languages'].setValue(1);
    }
  }

  userBudget = () : void => {
    if (this.productForm.valid) {

      const budgetElement: BudgetItem = { 
        ...this.productForm.value, 
        date: new Date().toISOString().split('T')[0], 
        budget: this.result() 
      }

      console.log(budgetElement);
      this.budgetService.saveBudget(budgetElement);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      const formValues = {
        Seo: params['Seo'] === 'true',
        Ads: params['Ads'] === 'true',
        Web: params['Web'] === 'true',
        pages: params['pages'] ? Number(params['pages']) : 1,
        languages: params['languages'] ? Number(params['languages']) : 1
      };
      this.productForm.patchValue(formValues);
    })
  }
}
