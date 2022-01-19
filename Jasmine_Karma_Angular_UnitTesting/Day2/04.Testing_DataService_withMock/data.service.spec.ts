import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [DataService]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new DataService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return an Observable<any[]>',   ( done:DoneFn ) => {

    httpClientSpy.get.and.returnValue(of(sampleData));

    service.getData().subscribe(
      (resData) => {
        expect(resData).toEqual(sampleData);
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);

  });

  it('should perform post operation',   ( done ) => {

    let obj:any = { "deptno": "50", "dname": "Testing",  "loc": "Hyd"   };
    httpClientSpy.post.and.returnValue(of(obj));

    service.addData(obj).subscribe(
      (resData:any) => {
        expect(resData).toEqual(obj);
        done();
      },
      done.fail
    );

    expect(httpClientSpy.post.calls.count()).toBe(1);

  });
});
