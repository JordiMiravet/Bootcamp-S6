
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListToolbarComponent } from './budget-list-toolbar';

describe('BudgetListToolbarComponent', () => {
  let component: BudgetListToolbarComponent;
  let fixture: ComponentFixture<BudgetListToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetListToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchByName when input changes', () => {
    spyOn(component.searchByName, 'emit');
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Jordi';
    input.dispatchEvent(new Event('input'));

    expect(component.searchByName.emit).toHaveBeenCalledWith('Jordi');
  });

  it('should emit sortByDate when Date button is clicked', () => {
    spyOn(component.sortByDate, 'emit');

    const btn = fixture.nativeElement.querySelector('button[aria-label="Ordenar pressupostos per data"]');
    btn.click();

    expect(component.sortByDate.emit).toHaveBeenCalled();
  });

  it('should emit sortByPrice when Import button is clicked', () => {
    spyOn(component.sortByPrice, 'emit');

    const btn = fixture.nativeElement.querySelector('button[aria-label="Ordenar pressupostos per import"]');
    btn.click();

    expect(component.sortByPrice.emit).toHaveBeenCalled();
  });

  it('should emit sortByAlphabetically when Nom button is clicked', () => {
    spyOn(component.sortByAlphabetically, 'emit');

    const btn = fixture.nativeElement.querySelector('button[aria-label="Ordenar pressupostos alfabèticament per nom"]');
    btn.click();
    
    expect(component.sortByAlphabetically.emit).toHaveBeenCalled();
  });

  
});
