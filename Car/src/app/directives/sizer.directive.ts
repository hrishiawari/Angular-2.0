import { Directive ,ElementRef,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective {
@Input('sizer')
@HostBinding('style.width')
size:string;


  constructor() {
this.size='300px';

   }

}
