import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
@Output()
imgEv:EventEmitter<any>;


  constructor() { 
this.imgEv=new EventEmitter();
  }


  ngOnInit() {
  }

 imageEvent() {
    this.imgEv.emit(
     {
      imgs:['a.jpeg','aa.jpeg','aaa.jpeg']
     }
    );
  }
   imageEventq() {
    this.imgEv.emit(
     {
      imgs:['s.jpeg','ss.jpeg','sss.jpeg']
     }
    );
  }
}
