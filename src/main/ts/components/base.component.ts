import { Inject, ElementRef } from '@angular/core';

export class BaseComponent {
    
    constructor(
        @Inject(ElementRef) public elementRef: ElementRef
    ) { }
    
    get nativeElement() {
        return this.elementRef.nativeElement.children[0];
    }
    
}
