import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerServiceSpy: { log: jasmine.Spy};

  beforeEach(() => {

    loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
        providers : [
                         CalculatorService,
                         { provide : LoggerService, useValue : loggerServiceSpy}
                    ]
    });

   // Get of TestBed class is deprecated. Use inject metod instead.
   // service = TestBed.get(CalculatorService);
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result:number = service.add(10,20);
    expect(result).toBe(30);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result:number = service.subtract(40, 15);
    expect(result).toBe(25);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

});
