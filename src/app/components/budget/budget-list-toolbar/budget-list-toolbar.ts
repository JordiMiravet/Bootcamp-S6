import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-list-toolbar',
  imports: [],
  templateUrl: './budget-list-toolbar.html',
  styleUrls: [ './budget-list-toolbar.css' ],
  outputs: [ 'sortByDate', 'sortByPrice', 'sortByAlphabetically', 'searchByName' ]
})
export class BudgetListToolbarComponent {

  sortByDate = new EventEmitter<void>();
  sortByPrice = new EventEmitter<void>();
  sortByAlphabetically = new EventEmitter<void>();
  searchByName = new EventEmitter<string>()

  onSortByDate(){
    this.sortByDate.emit();
  }
  onSortByPrice(){
    this.sortByPrice.emit();
  }
  onSortByAlphabetically(){
    this.sortByAlphabetically.emit();
  }
  onSortByName(event: Event){
    const input = event.target as HTMLInputElement;
    const search = input.value;
    this.searchByName.emit(search)
  }
}
