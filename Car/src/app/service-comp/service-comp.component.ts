import { Component, OnInit } from '@angular/core';
import { HugeService } from "app/service-comp/huge.service";

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css'],
  providers:[HugeService]
})
export class ServiceCompComponent implements OnInit {
inData:any;
ser:HugeService;
dt:any
  constructor( HugeService : HugeService ) { 
    this.dt=this.ser.getDate();
    this.inData=this.ser.dt;
  }

  ngOnInit() {
  }
  onclick(){
    
  }

}
