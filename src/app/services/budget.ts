import { Injectable } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';
@Injectable({
  providedIn: 'root',
})

export class BudgetService {

  budgets : any[] = [ 

    // Estos objetos son de prueba, luego he de acordarme de quitarlos ma friendo
    {
      Seo: true,
      Ads: true,
      Web: true,
      budget: 1230,
      date: '2025-11-28',
      email: 'j.miravet@gmail.com',
      languages: 1,
      name: 'Jordi Miravet Madueño',
      pages: 1,
      telephone: 655184125
    },
    {
      Seo: true,
      Ads: true,
      Web: true,
      budget: 1260,
      date: '2025-11-30',
      email: 'Ma.Amaya@gmail.com',
      languages: 2,
      name: 'Manuela Madueño Amaya',
      pages: 1,
      telephone: 683914111
    },
    {
      Seo: true,
      Ads: true,
      Web: false,
      budget: 700,
      date: '2025-11-25',
      email: 'Isidro.Miravet@gmail.com',
      languages: 1,
      name: 'Isidro Miravet Rubio',
      pages: 1,
      telephone: 678195138
    },
  ]

  seoBasePrice : number = 300;
  adsBasePrice : number = 400;
  webBasePrice : number = 500;

  calculateWebPrices(pages: number, languages:number) : number {
    return pages * languages * 30;
  }
  calculateTotalWeb(pages: number, languages:number) : number {
    return this.webBasePrice + this.calculateWebPrices(pages, languages);
  }

  saveBudget(budget: BudgetItem){
    this.budgets.push(budget);
  }
}
