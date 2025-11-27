import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel';
import { FormControl, FormGroup } from '@angular/forms';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form controls : "pages" & "languages"', () => {

    it('should create the panelForm FormGroup', () => {
      expect(component.panelForm).toBeTruthy();
      expect(component.panelForm instanceof FormGroup).toBeTrue();
    });

    it('should have pages and languages controls', () => {
      expect(component.panelForm.get('pages')).toBeTruthy();
      expect(component.panelForm.get('languages')).toBeTruthy();
    });

    it('should initialize controls with input values', () => {
      expect(component.panelForm.get('pages')?.value).toBe(1);
      expect(component.panelForm.get('languages')?.value).toBe(1);

      component.pages = 5;
      component.languages = 3;
      component.panelForm = new FormGroup({
        pages : new FormControl(component.pages),
        languages : new FormControl(component.languages)
      });

      expect(component.panelForm.get('pages')?.value).toBe(5);
      expect(component.panelForm.get('languages')?.value).toBe(3);
    })

  });

  describe('updateValues() method', () => {
    it('should create updateValues() function', () => {
      expect(component.updateValues).toBeTruthy();
    });

    it('should increase the pages control value by 1 when called with "pages" and 1', () => {
      component.panelForm.get('pages')?.setValue(1);
      component.updateValues('pages', 1);

      expect(component.panelForm.get('pages')?.value).toBe(2)
    });

    it('should decrease the languages control value by 1 when called with "languages" and -1', () => {
        component.panelForm.get('languages')?.setValue(3);
        component.updateValues('languages', -1);

        expect(component.panelForm.get('languages')?.value).toBe(2);
    });

    it('should not allow pages or languages to go below 1', () => {
      component.panelForm.get('pages')?.setValue(1);
      component.updateValues('pages', -1);

      expect(component.panelForm.get('pages')?.value).toBe(1);
      
      component.panelForm.get('languages')?.setValue(1);
      component.updateValues('languages', -9);

      expect(component.panelForm.get('languages')?.value).toBe(1)
    });
    
    it('should handle non-numeric values and reset to 1', () => {
      const pages = component.panelForm.get('pages');
      pages?.setValue("e");

      component.updateValues('pages', 0)

      expect(pages?.value).toBe(1)
    });
  });

  describe('emitValues()', () => {

    it('should emit the correct values when emitValues() is called', () => {
        component.panelForm.get('pages')?.setValue(3);
        component.panelForm.get('languages')?.setValue(2);

        spyOn(component.valuesChanged, 'emit')
        component.emitValues();

        expect(component.valuesChanged.emit)
          .toHaveBeenCalledWith({ pages: 3, languages: 2 })
    });
  })

  describe("helpButton & emitHelpButton", () => {

    it('should have helpButton default to "pages"', () => {
      expect(component.helpButton).toBe('pages');
    });
    
    it('should change helpButton when emitHelpButton() is called', () => {
     
      component.emitHelpButton('languages');
      expect(component.helpButton).toBe('languages');
    });
  })
});
