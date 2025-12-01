import { Injectable } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';
@Injectable({
  providedIn: 'root',
})

export class BudgetService {

  budgets : any[] = [ 

    {
      Seo: true,
      Ads: true,
      Web: true,
      budget: 1230,
      date: '2025-11-26',
      email: 'f.lorca@gmail.com',
      languages: 1,
      name: 'Federico García Lorca',
      pages: 1,
      telephone: '655184125'
    },
    {
      Seo: true,
      Ads: true,
      Web: true,
      budget: 1260,
      date: '2025-11-25',
      email: 'a.machado@gmail.com',
      languages: 2,
      name: 'Antonio Machado',
      pages: 1,
      telephone: '683914111'
    },
    {
      Seo: true,
      Ads: true,
      Web: false,
      budget: 700,
      date: '2025-11-27',
      email: 'Luis.G@gmail.com',
      languages: 1,
      name: 'Luis de Góngora',
      pages: 1,
      telephone: '678195138'
    },
    {
      Seo: true,
      Ads: true,
      Web: true,
      budget: 1320,
      date: '2025-11-27',
      email: 'G.A.Becq@gmail.com',
      languages: 4,
      name: 'Gustavo Adolfo Becquer',
      pages: 1,
      telephone: '677385582'
    },
    {
      Seo: true,
      Ads: false,
      Web: true,
      budget: 920,
      date: '2025-11-28',
      email: 'G.A.Becq@gmail.com',
      languages: 4,
      name: 'Gustavo Adolfo Becquer',
      pages: 1,
      telephone: '677385582'
    },
    {
      Seo: false,
      Ads: true,
      Web: true,
      budget: 1020,
      date: '2025-11-29',
      email: 'G.A.Becq@gmail.com',
      languages: 4,
      name: 'Gustavo Adolfo Becquer',
      pages: 1,
      telephone: '677385582'
    },
    {
      Seo: true,
      Ads: true,
      Web: false,
      budget: 700,
      date: '2025-11-30',
      email: 'a.machado@gmail.com',
      languages: 1,
      name: 'Antonio Machado',
      pages: 1,
      telephone: '683914111'
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
