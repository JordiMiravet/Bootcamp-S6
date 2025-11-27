import { Component } from '@angular/core';
import { BudgetItemComponent } from "../budget-item/budget-item";

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [ BudgetItemComponent ],
  templateUrl: './budgets-list.html',
  styleUrl: './budgets-list.css',
})
export class BudgetsList {


  
}
