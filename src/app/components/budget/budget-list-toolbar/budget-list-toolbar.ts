import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-budget-list-toolbar',
  imports: [],
  templateUrl: './budget-list-toolbar.html',
  styleUrls: [ './budget-list-toolbar.css' ],
  outputs: [ 'sortByDate', 'sortByPrice', 'sortByAlphabetically' ]
})
export class BudgetListToolbarComponent {

  sortByDate = new EventEmitter<void>();
  sortByPrice = new EventEmitter<void>();
  sortByAlphabetically = new EventEmitter<void>();

  onSortByDate(){
    this.sortByDate.emit();
  }
  onSortByPrice(){
    this.sortByPrice.emit();
  }
  onSortByAlphabetically(){
    this.sortByAlphabetically.emit();
  }
}
