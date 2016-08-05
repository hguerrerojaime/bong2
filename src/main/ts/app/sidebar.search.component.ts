import { Component, OnInit,Inject,ElementRef } from '@angular/core';
import { DomUtils } from '@bong/core';

@Component({
    selector: 'sidebar-search',
    template: `
        <li class="sidebar-search">
            <div class="input-group custom-search-form">
                <input type="text" class="form-control" placeholder="Menu Search...">
                <span class="input-group-addon">
                    <i class="fa fa-search"></i>
                </span>
            </div>
        </li>
    `
})
export class SidebarSearchComponent implements OnInit {
        
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    
}