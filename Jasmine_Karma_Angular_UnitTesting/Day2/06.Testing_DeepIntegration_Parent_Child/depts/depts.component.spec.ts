import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DeptsComponent } from './depts.component';

describe('DeptsComponent', () => {
  let component: DeptsComponent;
  let fixture: ComponentFixture<DeptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders child component - dept-details', () => {
    const childComponent = fixture.debugElement.query(By.css("app-dept-details"));
    expect(childComponent).toBeTruthy();
  });

  it('testing child component\'s data  - dept-details', () => {
    const testObj:any = {deptno: 10, dname: 'Accounts', loc: 'Hyd'};
    const childComponent = fixture.debugElement.query(By.css("app-dept-details"));
    expect(childComponent.properties.deptObj).toEqual(testObj);
  });


  it('perform child component event through parent - onDeptRemove', () => {
    const dno = 10;
    const childComponent = fixture.debugElement.query(By.css("app-dept-details"));
    // console.log("Before remove:  " + component.deptsArray.length);
    childComponent.triggerEventHandler('onDeptRemove',10);
    // console.log("After remove:  " + component.deptsArray.length);
    const result = component.deptsArray.findIndex(item => item.deptno === dno);
    expect(result).toBe(-1);
  });


});
