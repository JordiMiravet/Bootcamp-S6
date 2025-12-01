import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionForm } from './option-form';
import { FormControl } from '@angular/forms';

describe('OptionForm', () => {
  let component: OptionForm;
  let fixture: ComponentFixture<OptionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionForm);
    component = fixture.componentInstance;

    component.formName = new FormControl(false)
    component.title = 'Seo';
    component.description = 'Raúl ponme un 10, dame argooo xD';
    component.price = 100;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle checkbox value when toggleCheckbox is called', () => {
    expect(component.formName.value).toBeFalse();

    component.toggleCheckbox();
    expect(component.formName.value).toBeTrue();

    component.toggleCheckbox();
    expect(component.formName.value).toBeFalse();
  });

});
