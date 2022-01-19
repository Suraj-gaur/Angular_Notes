import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result:number = service.add(10,20);
    expect(result).toBe(30);
  });

  it('should subtract two numbers', () => {
    const result:number = service.subtract(40, 15);
    expect(result).toBe(25);
  });


});
