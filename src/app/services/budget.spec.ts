import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('BudgetService BasePrices', () => {

    it('should have correct seoBasePrice', () => {
      expect(typeof service.seoBasePrice).toBe('number');
      expect(service.seoBasePrice).toBe(300);
    });

    it('should have correct adsBasePrice', () => {
      expect(typeof service.adsBasePrice).toBe('number');
      expect(service.adsBasePrice).toBe(400);
    });

    it('should have correct webBasePrice', () => {
      expect(typeof service.webBasePrice).toBe('number');
      expect(service.webBasePrice).toBe(500);
    });

  });

  describe('calculateWebPrices function', () => {

    it('should exist', () => {
      expect(service.calculateWebPrices).toBeTruthy()
    });

    it('should call calculateWebPrices', () => {
      spyOn(service, 'calculateWebPrices');

      service.calculateWebPrices(2, 3);
      expect(service.calculateWebPrices).toHaveBeenCalled();
    });

    it('should return the correct value', () => {
      const result = service.calculateWebPrices(1, 3);
      expect(result).toBe(90);
    });
  });

  describe('calculateTotalWeb function', () => {

    it('should exist', () => {
      expect(service.calculateTotalWeb).toBeTruthy()
    });

    it('should call calculateTotalWeb and return correct value', () => {
      spyOn(service, 'calculateTotalWeb').and.callThrough();

      const result = service.calculateTotalWeb(1, 2);

      expect(result).toBe(560);
      expect(service.calculateTotalWeb).toHaveBeenCalledWith(1, 2)
    })

  });

  describe('calculateTotalElements function', () => {
    it('should exist', () => {
      expect(service.calculateTotalElements).toBeTruthy();
    });

    it('should call calculateTotalElements and return correct value', () => {
      spyOn(service, 'calculateTotalElements').and.callThrough();

      let result = service.calculateTotalElements(300, 400, 500);
      expect(result).toBe(1200)
      expect(service.calculateTotalElements).toHaveBeenCalledWith(300, 400, 500)
    })

  });

});
