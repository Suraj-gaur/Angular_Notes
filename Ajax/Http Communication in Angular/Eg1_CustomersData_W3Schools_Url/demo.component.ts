import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
  customersArray: any[] = [];

  constructor(private httpObj:HttpClient)
  {

  }

  getData()
  {
    let url:string  = "https://www.w3schools.com/angular/customers.php";
    this.httpObj.get(url).subscribe( (result:any) => {
        //   alertconsole.log(result.records);
        this.customersArray = result.records;
    });
  }
}
