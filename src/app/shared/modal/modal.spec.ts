import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('currentHelpButton @Input', () => {

    it('currentHelpButton should be of type string"', () => {
      expect(typeof component.currentHelpButton).toBe('string');
    });

    it('should have "pages" as default value', () => {
      expect(component.currentHelpButton).toBe('pages');
    });

    it('should allow changing the value to "languages"', () => {
      component.currentHelpButton = 'languages';
      expect(component.currentHelpButton).toEqual('languages');
    });

    it('should always contain a valid value', () => {
      expect(['pages', 'languages']).toContain(component.currentHelpButton);
    });

  });
  
  describe('helpButtonEmit @Input', () => {
    
    it('should emit "pages" when currentHelpButton is "pages"', () => {
      spyOn(component.helpButton, 'emit');

      component.currentHelpButton = 'pages';
      component.helpButtonEmit();

      expect(component.helpButton.emit).toHaveBeenCalledWith('pages');
    });

    it('should emit "languages" when currentHelpButton is "languages"', () => {
      spyOn(component.helpButton, 'emit');

      component.currentHelpButton = 'languages';
      component.helpButtonEmit();

      expect(component.helpButton.emit).toHaveBeenCalledWith('languages');
    });

  });
  
});