import { Directive ,ElementRef,HostBinding,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective {
@Input('sizer')
@HostBinding('style.width')
size:string;
@HostBinding('style.border')
border:string;

@HostListener('click')
onEnter(){
this.size='300px';
}

@HostListener('mouseleave')
onLeave(){
  this.size='400px';
  this.border='1px solid blue';
}

  constructor() {
this.size='300px';

   }

}
