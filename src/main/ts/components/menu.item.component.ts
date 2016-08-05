import { Component, Input, OnInit, ElementRef, Inject } from '@angular/core';

import { DomUtils } from '@bong/core';

@Component({
    selector: 'menu-item',
    template: `
        <li class="{{liClass}}"><a href="{{href}}"><ng-content></ng-content></a></li>
    `
})
export class MenuItemComponent implements OnInit {
        
    @Input()
    href : string;
    
    @Input()
    liClass : string;
    
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    
}