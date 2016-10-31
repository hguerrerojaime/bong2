import { Inject, ElementRef,Component } from '@angular/core';

export class BaseComponent {
    
    constructor(public elementRef: ElementRef) {

    }
    
    get nativeElement() {
        return this.elementRef.nativeElement.children[0];
    }
    
}
