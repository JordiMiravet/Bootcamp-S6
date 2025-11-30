import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListToolbar } from './budget-list-toolbar';

describe('BudgetListToolbar', () => {
  let component: BudgetListToolbar;
  let fixture: ComponentFixture<BudgetListToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetListToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetListToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
