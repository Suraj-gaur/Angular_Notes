import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
	public  fname:string   = "";
	public  lname:string   = "";
	public  city:string   = "";
	public  email:string   = "";
	public  pincode:string   = "";


  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
  }

}