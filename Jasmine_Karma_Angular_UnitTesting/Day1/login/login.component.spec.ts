import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :  [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1. Default ---  Testing Component Instance Creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // 2. Testing  Component  properties
  it('should result property contains empty value as defualt value', () => {

    // Action
    const strOutput:string  = component.result;

    // Assert
    expect(strOutput).toBe("");
  });


  // 3. Testing  Component  methods
  it('should result contains "Welcome to Admin" for valid user credentials', () => {

    // Action
    component.uid = 'admin';
    component.pwd= 'admin123';
    component.login_click();

    // Assert
    expect( component.result).toBe("Welcome to Admin");
  });


  // 4. Testing  Component  methods
  it('should result contains "Invalid user id or password" for invalid user credentials', () => {

    // Action
    component.uid = 'admin';
    component.pwd= 'hello123';
    component.login_click();

    //console.log(component.result);

    // Assert
    expect( component.result).toBe("Invalid user id or password");
  });

  // 5. Testing  Component  methods
  it('should result contains "Invalid user id or password" for empty uid and pwd', () => {

    // Action
    component.uid = '';
    component.pwd= '';
    component.login_click();


    // Assert
    expect( component.result).toBe("Invalid user id or password");
  });


  // 6. Testing  Component  Templates --- html elements
  it('should set the value to user id textbox', () => {

    const inputObj =  fixture.nativeElement.querySelector("input");
    inputObj.value = "Scott";
    inputObj.dispatchEvent( new Event("input") );

    console.log("User Id Property  : " +  component.uid);

    // Assert
    expect( component.uid).toBe("Scott");
  });


    // 7. Testing  Component  Templates --- html elements
    it('should login button click generate result in paragraph -- valid user', () => {

      const inputArray =  fixture.nativeElement.querySelectorAll("input");
      inputArray[0].value = "admin";
      inputArray[0].dispatchEvent( new Event("input") );  // reflect two-way databinding

      inputArray[1].value = "admin123";
      inputArray[1].dispatchEvent( new Event("input") );

      const button =  fixture.nativeElement.querySelector("button");
      button.click();

      // console.log(component.result);
      fixture.detectChanges();

      const paraObj =  fixture.nativeElement.querySelector("p");

      // Assert
      // expect( component.result).toBe("Welcome to Admin");
      expect( paraObj.textContent).toBe("Welcome to Admin");

    });

    // 7. Testing  Component  Templates --- html elements
    it('should login button click generate invalid message in paragraph -- invalid user', () => {

      const inputArray =  fixture.nativeElement.querySelectorAll("input");
      inputArray[0].value = "admin";
      inputArray[0].dispatchEvent( new Event("input") );  // reflect two-way databinding

      inputArray[1].value = "hello123";
      inputArray[1].dispatchEvent( new Event("input") );

      const button =  fixture.nativeElement.querySelector("button");
      button.click();

      // console.log(component.result);
      fixture.detectChanges();

      const paraObj =  fixture.nativeElement.querySelector("p");

      // Assert
      // expect( component.result).toBe("Welcome to Admin");
      expect( paraObj.textContent).toBe("Invalid user id or password");

    });

});
