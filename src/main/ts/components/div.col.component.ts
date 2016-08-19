import { Component,Input, OnInit, ElementRef, Inject } from '@angular/core';

import { DomUtils } from '../core/dom.utils';

@Component({
    selector: 'div-col',
    template: `<div class="col-{{size}}-{{width}}"><ng-content></ng-content></div>`   
})
export class DivColComponent implements OnInit {
    
    @Input()
    size:string = "md";
    
    @Input()
    width:number = 12;
    
    @Input()
    unwrap:boolean = false;
        
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        if (this.unwrap) {
            DomUtils.unwrapElement(this.elementRef); 
        }
    }
    
}