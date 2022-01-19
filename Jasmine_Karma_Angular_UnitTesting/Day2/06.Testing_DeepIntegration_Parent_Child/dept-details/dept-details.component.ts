import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent
{
    @Input()
    deptObj: any = {};

    @Output()
	  onDeptRemove:EventEmitter<number> = new EventEmitter<number>();


    deptRemove_child()
    {
      this.onDeptRemove.emit(this.deptObj.deptno);
    }
}
