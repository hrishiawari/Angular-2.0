import { Injectable } from '@angular/core';

@Injectable()
export class HugeService {
dt:any;
  constructor() {
    this.dt=this.getDate()
   }
getDate(){
   this.dt=new Date().toString();
}
}
