import { Component, signal } from '@angular/core';
import { BudgetItemComponent } from "../budget-item/budget-item";
import { BudgetService } from '../../../services/budget';
import { BudgetItem } from '../../../models/budget-item.model';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [ BudgetItemComponent ],
  templateUrl: './budgets-list.html',
  styleUrls: ['./budgets-list.css'],
})
export class BudgetsList {
  
  budgets = signal<BudgetItem[]>([]);

  constructor(private budgetService: BudgetService){
    this.budgets.set(this.budgetService.budgets);
  }
  
}
