import { Component } from '@angular/core';
import { BudgetItem } from '../../../models/budget-item.model'

@Component({
  selector: 'app-budget-item',
  standalone: true,
  imports: [],
  templateUrl: './budget-item.html',
  styleUrls: ['./budget-item.css'],
  inputs: ['budgetItem']
})
export class BudgetItemComponent {

  budgetItem!: BudgetItem;

  contractedServices() : string[] {
    const list: string[] = [];

    if(this.budgetItem.Seo) list.push("Seo");
    if(this.budgetItem.Ads) list.push("Ads");
    if(this.budgetItem.Web){
      list.push(`Web (
        ${this.budgetItem.pages} ${this.budgetItem.pages > 1 ? "pàgines" : "pàgina"}, 
        ${this.budgetItem.languages} ${this.budgetItem.languages > 1 ? "llenguatges" : "llenguatge"})`)
    }

    return list
  }
}
