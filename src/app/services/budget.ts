import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class BudgetService {

  budgets : any[] = []

  seoBasePrice : number = 300;
  adsBasePrice : number = 400;
  webBasePrice : number = 500;

  calculateWebPrices(pages: number, languages:number) : number {
    return pages * languages * 30;
  }
  calculateTotalWeb(pages: number, languages:number) : number {
    return this.webBasePrice + this.calculateWebPrices(pages, languages);
  }

  saveBudget(budget: any){
    this.budgets.push(budget);
  }
}
