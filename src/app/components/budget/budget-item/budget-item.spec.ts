import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemComponent } from './budget-item';
import { BudgetItem } from '../../../models/budget-item.model';

describe('BudgetItemComponent', () => {
  let component: BudgetItemComponent;
  let fixture: ComponentFixture<BudgetItemComponent>;

  const mockBudgetItem: BudgetItem = {
    Seo: true,
    Ads: false,
    Web: true,
    budget: 500,
    date: '2025-12-01',
    email: 'G.Becquer@example.com',
    name: 'Gustavo',
    pages: 2,
    languages: 1,
    telephone: '678199155'
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetItemComponent);
    component = fixture.componentInstance;
    component.budgetItem = mockBudgetItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render budget item name and email', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Gustavo');
    expect(compiled.querySelector('h3')?.textContent).toContain('G.Becquer@example.com');
  });
});
