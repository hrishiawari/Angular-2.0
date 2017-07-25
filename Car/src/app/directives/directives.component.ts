import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  xyz: boolean;
  pqr: boolean;
  constructor() { }

  ngOnInit() {
  }

  otherFun(){
this.xyz= !this.xyz;
  }

}
