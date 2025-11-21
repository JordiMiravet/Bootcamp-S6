import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  seoBasePrice : number = 300;
  adsBasePrice : number = 400;
  webBasePrice : number = 500;

  calculateTotalWeb(){
    return this.webBasePrice;
  }

  calculateTotal(seoValue : number, adsValues : number, webValues : number){
    return seoValue + adsValues + webValues;
  }
}
