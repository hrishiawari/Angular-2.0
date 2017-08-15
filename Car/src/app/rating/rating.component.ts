import { Component, OnInit } from '@angular/core';
import {RatingModule} from "ng2-rating";  
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 reviews  = [
     {rating :7, review: `Good Product`},
     {rating : 9, review: `Greate`},
   ];
  constructor() { }
  

  ngOnInit() {
  }

}
