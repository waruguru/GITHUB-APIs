import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
      this.highlight(1.1);
  }
  @HostListener('mouseleave') onMouseLeave(){
      this.highlight(1);
  }


  private highlight(action:number){
      this.el.nativeElement.style.transform = `scale(${action})`;
  }
  

}
