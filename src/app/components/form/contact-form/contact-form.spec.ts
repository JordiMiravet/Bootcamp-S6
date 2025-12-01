import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;

    component.formContact = new FormGroup({
      name: new FormControl('', { validators: [ Validators.required ] }),
      telephone: new FormControl('', { validators: [ Validators.required ] }),
      email: new FormControl('', { validators: [ Validators.required, Validators.email ] })
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name, telephone, email inputs and submit button', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('input[formControlName="name"]')).toBeTruthy();
    expect(element.querySelector('input[formControlName="telephone"]')).toBeTruthy();
    expect(element.querySelector('input[formControlName="email"]')).toBeTruthy();

    const button = element.querySelector('button[type="submit"]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    expect(button.disabled).toBeTrue();
  });
});