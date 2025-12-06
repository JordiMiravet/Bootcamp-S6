import { Injectable, signal } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';
@Injectable({
  providedIn: 'root',
})

export class BudgetService {

  budgets = signal<BudgetItem[]>([ 
    {
      Seo: true,
      Ads: true,
      Web: true,
      pages: 1,
      languages: 1,
      name: 'Federico García Lorca',
      telephone: '655184125',
      email: 'f.lorca@gmail.com',
      budget: 1230,
      date: '2025-11-26',
    },
    {
      Seo: true,
      Ads: true,
      Web: true,
      pages: 1,
      languages: 2,
      name: 'Antonio Machado',
      telephone: '683914111',
      email: 'a.machado@gmail.com',
      budget: 1260,
      date: '2025-11-25',
    },
    {
      Seo: true,
      Ads: true,
      Web: false,
      pages: 1,
      languages: 1,
      name: 'Luis de Góngora',
      telephone: '678195138',
      email: 'Luis.G@gmail.com',
      budget: 700,
      date: '2025-11-27',
    },
    {
      Seo: true,
      Ads: true,
      Web: true,
      pages: 1,
      languages: 4,
      name: 'Gustavo Adolfo Becquer',
      telephone: '677385582',
      email: 'G.A.Becq@gmail.com',
      budget: 1320,
      date: '2025-11-27',
    },
    {
      Seo: true,
      Ads: false,
      Web: true,
      pages: 1,
      languages: 4,
      name: 'Gustavo Adolfo Becquer',
      telephone: '677385582',
      email: 'G.A.Becq@gmail.com',
      budget: 920,
      date: '2025-11-28',
    },
    {
      Seo: false,
      Ads: true,
      Web: true,
      pages: 1,
      languages: 4,
      name: 'Gustavo Adolfo Becquer',
      telephone: '677385582',
      email: 'G.A.Becq@gmail.com',
      budget: 1020,
      date: '2025-11-29',
    },
    {
      Seo: true,
      Ads: true,
      Web: false,
      pages: 1,
      languages: 1,
      name: 'Antonio Machado',
      telephone: '683914111',
      email: 'a.machado@gmail.com',
      budget: 700,
      date: '2025-11-30',
    },
  ]);

  seoBasePrice : number = 300;
  adsBasePrice : number = 400;
  webBasePrice : number = 500;

  calculateWebPrices(pages: number, languages:number) : number {
    return pages * languages * 30;
  }
  calculateTotalWeb(pages: number, languages:number) : number {
    return this.webBasePrice + this.calculateWebPrices(pages, languages);
  }

  saveBudget(budget: BudgetItem): void {
    this.budgets.update(items => [...items, budget]);
  }
}
