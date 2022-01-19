import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';


const sampleData:any[] = [
     {
        "deptno": "10",
        "dname": "Sales",
        "loc": "Hyd"
      },
      {
        "deptno": "20",
        "dname": "Accounts",
        "loc": "Hyd"
      },
    {
        "deptno": "30",
        "dname": "Sales",
        "loc": "Chennai"
      },
      {
        "deptno": "40",
        "dname": "Marketing",
        "loc": "Chennai"
      }
];


describe('DataService', () => {
  let service: DataService;
  let  httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports   : [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return an Observable<any[]>',   ( ) => {
      service.getData().subscribe(resData => {
        expect(resData.length).toBe(4);
      });
  });

  it('should return an depts data', ( ) => {
    service.getData().subscribe(resData => {
      expect(resData).toEqual(sampleData);
    });
  });


  it('should perform post operation',   () => {

      let obj:any = { "deptno": "50", "dname": "Testing",  "loc": "Hyd"   };
      service.addData(obj).subscribe(
        (resData:any) => {
          expect(resData).toEqual(obj);
        }
      );
    });




});



  /*

  it('should perform post operation',   ( done ) => {

    let obj:any = { "deptno": "50", "dname": "Testing",  "loc": "Hyd"   };


    service.addData(obj).subscribe(
      (resData:any) => {
        expect(resData).toEqual(obj);
        done();
      },
      done.fail
    );

*/
