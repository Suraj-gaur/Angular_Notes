import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
} )
export class DataService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/depts";


  constructor(private httpObj: HttpClient) {

  }

  getData():Observable<any[]>
  {
    // const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
    // const header = { 'Authorization' : `Bearer ${hardcodedToken}`};
    // return this.httpObj.get<any[]>(this.url, { headers: header});

    return this.httpObj.get<any[]>(this.url);

  }

  getDataById(dno:number) : Observable<any>
  {
   // return this.httpObj.get<any>(this.url + "/" + dno);
   return this.httpObj.get<any>("http://localhost:3001/depts/10");
    // return this.httpObj.get<any>(`${this.url}/${dno}`);
  }

  addData(dataObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, dataObj);
  }

  updateData(dataObj:any) : Observable<any>
  {
    return this.httpObj.put<any>(this.url + "/" + dataObj.deptno, dataObj);
  }

  deleteData(dno:number) : Observable<any>
  {
    return this.httpObj.delete<any>(`${this.url}/${dno}`);
  }


  getDeptNames():Observable<any[]>
  {


    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => {
          return { 	dname: item.dname, loc : item.loc} });
    })
    );

    /*
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return  res.filter(item => item.loc == 'Hyd');
      })
    );
    */

    /*
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => {
                   // return (({dname, loc}) => ({dname, loc}))(item);;
                   return {dname : item.dname, loc : item.loc};
                });
      })
    );
    */

    /*
      return this.httpObj.get<any[]>(this.url).pipe(
        map(res => {
          return res.map(item => {
                     return item.dname
                  });
        })
      );
      */

  }

}