import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { FormMainComponent } from './form-main';

describe('FormMainComponent', () => {
  let component: FormMainComponent;
  let fixture: ComponentFixture<FormMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update total when selecting Seo', () => {
    component.seoControl.setValue(true);
    expect(component.result()).toBe(component.budgetService.seoBasePrice);
  });

  it('should calculate total price reactive to selected options', () => {
    component.seoControl.setValue(true);
    component.adsControl.setValue(true);
    component.webControl.setValue(true);

    const expectedTotal = 
      component.budgetService.seoBasePrice + 
      component.budgetService.adsBasePrice + 
      component.budgetService.calculateTotalWeb(component.pages(), component.languages())

    expect(component.result()).toEqual(expectedTotal);
  });
});

