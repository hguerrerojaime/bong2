import { Component, Input, OnInit, ElementRef, Inject } from '@angular/core';

import { DomUtils } from '../core/dom.utils';

@Component({
    selector: 'menu-item',
    template: `
        <li class="{{liClass}}"><a [routerLink]="routerLink"><ng-content></ng-content></a></li>
    `
})
export class MenuItemComponent implements OnInit {
        
    @Input()
    routerLink : string;
    
    @Input()
    liClass : string;
    
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    
}