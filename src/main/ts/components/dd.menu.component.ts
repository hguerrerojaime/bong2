import { Component, Input, Inject, OnInit, ElementRef } from '@angular/core';
import { DomUtils } from '../core/dom.utils';

@Component({
    selector: 'dd-menu',
    template: `
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        {{ label }} <span class="caret">
              </span></a>
              <ul class="dropdown-menu">
                  <ng-content></ng-content>
              </ul>
          </li>
    `
})
export class DdMenuComponent implements OnInit {
       
    @Input() label : string = "My DD Menu";
    
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    

}