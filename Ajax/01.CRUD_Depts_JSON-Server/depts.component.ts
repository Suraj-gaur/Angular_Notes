import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

 deptno: number  = 0;
 dname  :string  = "";
 loc  :string  = "";
 isDisabled :boolean = false;

 url:string  = "http://localhost:3000/depts";

  public deptsArray:any[] = [];


  constructor(private httpObj: HttpClient) { }

  ngOnInit(): void {
  }


  getDepts_click()
  {
    this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
          this.deptsArray = response;
    });

  }


  addDept_click()
  {
    let deptObj:Dept = new Dept();
    deptObj.deptno = this.deptno;
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;

    this.httpObj.post<any>(this.url,  deptObj).subscribe( (response:any) =>{
      console.log("New Dept details are added to server.");
      alert("New Dept details are added to server.");
      this.clearFields();
      this.getDepts_click();  // to get all the updated results
    });
  }

  removeDept_click(dno:number)
  {
    this.httpObj.delete<any>(this.url + "/" + dno).subscribe( (response:any) =>{
      console.log("Requested Dept details are deleted from  server.");
      alert("Requested Dept details are deleted from  server.");
      this.getDepts_click();  // to get all the updated results
    });
  }


  selectDept_click(dno:number)
  {
    this.httpObj.get<any>(this.url + "/" + dno).subscribe( (response:any) =>{

      let deptObj = response;
      this.deptno =   deptObj.deptno;
      this.dname =   deptObj.dname;
      this.loc 		=  deptObj.loc;
      this.isDisabled = true;
    });

  }

  updateDept_click()
  {
    let deptObj:Dept = new Dept();
    deptObj.deptno = this.deptno;
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;

    this.httpObj.put<any>(this.url + "/" +  deptObj.deptno,  deptObj).subscribe( (response:any) =>{
      console.log("Requested Dept details are updated to server.");
      alert("Requested Dept details are updated to server.");
      this.clearFields();
      this.getDepts_click();  // to get all the updated results
    });

  }

  clearFields()
  {
      this.isDisabled = false;
      this.deptno = 0;
      this.dname  = "";
      this.loc  = "";
  }



}


class Dept
{
  deptno  : number = 0;
  dname  : string  = "";
  loc  : string  = "";
}