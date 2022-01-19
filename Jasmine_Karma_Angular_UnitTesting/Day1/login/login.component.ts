import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string   ="";
  pwd:string   ="";
  result:string   ="";


  constructor() { }

  ngOnInit(): void {
  }


 login_click()
 {
    if(this.uid == "admin" && this.pwd == "admin123")
    {
      this.result = "Welcome to Admin";
    }
    else
    {
      this.result = "Invalid user id or password";
    }
 }

}
