import { Component, OnInit,Inject,ElementRef,Output,EventEmitter } from '@angular/core';
import { DomUtils } from '../core/index';

@Component({
    selector: 'sidebar-search',
    template: `
        <li class="sidebar-search">
            <div class="input-group custom-search-form">
                <input 
                     type="text"
                     class="form-control"
                     placeholder="Menu Search..."
                     [(ngModel)]="searchTerm"
                     (ngModelChange)="emitOnSearch()"
                >
                <span class="input-group-addon">
                    <i class="fa fa-search"></i>
                </span>
            </div>
        </li>
    `
})
export class SidebarSearchComponent implements OnInit {
    
    @Output()
    onSearch:EventEmitter<string> = new EventEmitter<string>();
    
    private searchTerm:string;
        
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    
    emitOnSearch() {
        this.onSearch.emit(this.searchTerm);
    }
    
}