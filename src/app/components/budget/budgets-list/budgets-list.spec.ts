
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsList } from './budgets-list';

describe('BudgetsList', () => {
  let component: BudgetsList;
  let fixture: ComponentFixture<BudgetsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter budgets by name', () => {
    const fixtureBudgets = fixture.nativeElement as HTMLElement;
    const input = fixtureBudgets.querySelector('input') as HTMLInputElement

    input.value = 'Gustavo';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const resultBudgets = component.budgets().map(b => b.name);
    expect(resultBudgets.every(name => name.includes('Gustavo'))).toBeTrue()
  });

  it('should sort budgets by date', () => {
    const fixtureBudgets = fixture.nativeElement as HTMLElement;
    const dateButton = fixtureBudgets.querySelector('button[aria-label="Ordenar pressupostos per data"]') as HTMLButtonElement;

    dateButton.click();
    fixture.detectChanges();

    const budgetsDates = component.budgets().map( b => b.date);
    const sortedDates = [...budgetsDates].sort((a, b) => b.localeCompare(a));
    expect(budgetsDates).toEqual(sortedDates);
  });

  it('should sort budgets by price', () => {
    const fixtureBudgets = fixture.nativeElement as HTMLElement;
    const priceButton = fixtureBudgets.querySelector('button[aria-label="Ordenar pressupostos per import"]') as HTMLButtonElement;

    priceButton.click();
    fixture.detectChanges();

    const budgetsPrices = component.budgets().map(b => b.budget);
    const sortedPrices = [...budgetsPrices].sort((a, b) => b - a)
    expect(budgetsPrices).toEqual(sortedPrices);
  });

  it('should sort budgets alphabetically by name', () => {
    const fixtureBudgets = fixture.nativeElement as HTMLElement;
    const nameButton = fixtureBudgets.querySelector('button[aria-label="Ordenar pressupostos alfabèticament per nom"]') as HTMLButtonElement;

    nameButton.click();
    fixture.detectChanges();

    const budgetsNames = component.budgets().map(b => b.name);
    const sortedNames = [...budgetsNames].sort((a, b) => a.localeCompare(b));
    expect(budgetsNames).toEqual(sortedNames);
  });
});
