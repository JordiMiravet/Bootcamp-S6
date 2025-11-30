import { Component, signal } from '@angular/core';

import { BudgetService } from '../../../services/budget';
import { BudgetItemComponent } from "../budget-item/budget-item";
import { BudgetItem } from '../../../models/budget-item.model';
import { BudgetListToolbarComponent } from "../budget-list-toolbar/budget-list-toolbar";

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [BudgetItemComponent, BudgetListToolbarComponent],
  templateUrl: './budgets-list.html',
  styleUrls: ['./budgets-list.css'],
})
export class BudgetsList {
  
  budgets = signal<BudgetItem[]>([]);

  constructor(private budgetService: BudgetService){
    this.budgets.set(this.budgetService.budgets);
  }

  sortByDate(){
    const newOrder = [...this.budgets()].sort((a, b) => a.date.localeCompare(b.date))
    this.budgets.set(newOrder)
  }

  sortByPrice(){
    const newOrder = [...this.budgets()].sort((a, b) => b.budget - a.budget);
    this.budgets.set(newOrder)
  }

  sortByAlphabetically(){
    const newOrder = [...this.budgets()].sort((a, b) => a.name.localeCompare(b.name));
    this.budgets.set(newOrder)
  }
  
}
