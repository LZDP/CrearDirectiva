import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'a[appDirectiva]',
  standalone: true
})
export class DirectivaDirective {

  private textoinicial: String = ""

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') encima() {
    
    this.textoinicial = this.el.nativeElement.textContent;

    
    this.el.nativeElement.textContent = this.textoinicial.toUpperCase();

    
    this.el.nativeElement.style.border = '2px solid green';
  }

  @HostListener('mouseleave') sale() {
    
    this.el.nativeElement.textContent = this.textoinicial;

    
    this.el.nativeElement.style.border = 'none';
  }


}
