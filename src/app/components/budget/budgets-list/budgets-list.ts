import { Component, signal } from '@angular/core';

import { BudgetService } from '../../../services/budget';
import { BudgetItemComponent } from "../budget-item/budget-item";
import { BudgetItem } from '../../../models/budget-item.model';
import { BudgetListToolbarComponent } from "../budget-list-toolbar/budget-list-toolbar";

@Component({
  selector: '[budgets-list]',
  standalone: true,
  imports: [BudgetItemComponent, BudgetListToolbarComponent],
  templateUrl: './budgets-list.html',
  styleUrls: ['./budgets-list.css'],
})
export class BudgetsList {
  
  budgets = signal<BudgetItem[]>([]);
  originalBudgets: BudgetItem[] = [];

  constructor(private budgetService: BudgetService){
    this.originalBudgets = this.budgetService.budgets;
    this.budgets.set(this.budgetService.budgets);
  }

  sortByDate(){
    const newOrder = [...this.budgets()].sort((a, b) => b.date.localeCompare(a.date))
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
  
  searchByName(searchText: string){
    if(!searchText) {
      this.budgets.set(this.originalBudgets)
    } else {
      const filteredName = this.originalBudgets.filter((value) => value.name.toLowerCase().includes(searchText.toLowerCase()))
      this.budgets.set(filteredName)
    }
  }
}
