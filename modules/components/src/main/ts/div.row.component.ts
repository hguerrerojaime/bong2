import { Component, Input, OnInit, Inject, ElementRef } from '@angular/core';
import { DomUtils } from '../core/dom.utils';

@Component({
    selector: 'div-row',
    template: '<div class="row col-padding-{{ colPadding }}"><ng-content></ng-content></div>'    
})
export class DivRowComponent implements OnInit {
    
    @Input()
    colPadding:string;
    
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