import { Component } from '@angular/core';
import { FormMainComponent } from "../form/form-main/form-main";
import { BudgetsList } from "../budget/budgets-list/budgets-list";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormMainComponent, BudgetsList],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {}
