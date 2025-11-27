/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home';
import { FormGroup } from '@angular/forms';

describe('Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updatePanelElements()', () => {

    it('should update pages and languages from PanelComponent', () => {
      component.updatePanelElements({pages: 2, languages: 3});

      expect(component.pages).toBe(2);
      expect(component.languages).toBe(3);
    });

    it('should call calculateTotal() when updatePanelElements is called', () => {
      spyOn(component, "calculateTotal");

      component.updatePanelElements({pages: 2, languages: 3});
      expect(component.calculateTotal).toHaveBeenCalled()
    });

  });

  describe('calculateTotal()', () => {

    it('should calculate total as 0 if all checkboxes is false', () => {
      component.Seo.setValue(false);
      component.Ads.setValue(false);
      component.Web.setValue(false);
      
      component.calculateTotal();

      expect(component.result).toBe(0)
    });

    it('should calculate total including Seo when Seo is true', () => {
      component.Seo.setValue(true);
      component.Ads.setValue(false);
      component.Web.setValue(false);

      component.calculateTotal();

      expect(component.result).toBe(300);
    });

    it('should calculate total including Ads when Ads is true', () => {
      component.Seo.setValue(false);
      component.Ads.setValue(true);
      component.Web.setValue(false);

      component.calculateTotal();

      expect(component.result).toBe(400);
    });

    it('should calculate total including Web when Web is true', () => {
      component.Seo.setValue(false);
      component.Ads.setValue(false);
      component.Web.setValue(true);

      component.calculateTotal();

      expect(component.result).toBe(530);
    });

    it('should combine multiple options correctly', () => {
      component.Seo.setValue(true);
      component.Ads.setValue(false);
      component.Web.setValue(true);

      component.calculateTotal();

      expect(component.result).toBe(830);

      component.Seo.setValue(false);
      component.Ads.setValue(true);
      component.Web.setValue(true);

      component.calculateTotal();

      expect(component.result).toBe(930);
    });

  });

  describe('onWebChange()', () => {

    it('should reset pages and languages to 1 if Web is unchecked', () => {
        component.pages = 2;
        component.languages = 3;
        component.Web.setValue(false)

        component.onWebChange();

        expect(component.pages).toBe(1);
        expect(component.languages).toBe(1);
    });

    it('should recalculate total after Web change', () => {
      component.Ads.setValue(false);
      component.Seo.setValue(false);
      component.Web.setValue(true);

      component.pages = 1;
      component.languages = 1;

      component.onWebChange();
      expect(component.result).toBe(530)

      component.Web.setValue(false);

      component.onWebChange();
      expect(component.result).toBe(0);
    });

  });

  describe('ngOnInit', () => {

    it('should be created', () => {
      expect(component.ngOnInit).toBeTruthy()
    })

    it('should called calculateTotal() when productForm values change', () => {
      spyOn(component, 'calculateTotal');
      component.Seo.setValue(true)

      expect(component.calculateTotal).toHaveBeenCalled();
    });
  });

});
*/
