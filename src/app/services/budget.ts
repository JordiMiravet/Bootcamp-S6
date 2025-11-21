import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  seoBasePrice : number = 300;
  adsBasePrice : number = 400;
  webBasePrice : number = 500;

  calculateWebPrices(pages: number, languages:number){
    return pages * languages * 30;
  }

  calculateTotalWeb(pages: number, languages:number){
    return this.webBasePrice + this.calculateWebPrices(pages, languages);
  }

  calculateTotal(seoValue : number, adsValues : number, webValues : number){
    return seoValue + adsValues + webValues;
  }
}
