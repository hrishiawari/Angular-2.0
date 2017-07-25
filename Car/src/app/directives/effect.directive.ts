import { Directive,Input,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[effects]'
})
export class EffectDirective {
  @Input()
  @HostBinding('style.backgroundColor')
backCol:string;
@HostListener('mouseenter')
onEnter(){
  this.backCol=this.magicColor();
}
@HostListener('mouseleave')
onLeave(){
  this.backCol=this.magicColor();
}
magicColor(): string{
  let red = Math.round(Math.random()*255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random()*255);
  console.log(`rgb(${red},${green}, ${blue})`);
  return `rgb(${red}, ${green}, ${blue})`;
}

 
  constructor() { }

}
