import { by } from 'protractor';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

@Input()
imgNm:any;

  constructor() {  
  }
  ngOnInit() {
  }

}
