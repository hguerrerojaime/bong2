import { Component, OnInit,Inject,ElementRef } from '@angular/core';
import { SidebarSearchComponent } from './sidebar.search.component';
import { DefaultJqueryComponent } from '../../../components/src/ts/default.jquery.component';


import '@plugins/node/metismenu/dist/metisMenu.js';
import '../../../prototypes/src/ts/array';

declare var jQuery:any;


@Component({
  selector: 'app-sidebar',
  template: `
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav in" id="side-menu">
               <sidebar-search
                  (onSearch)="searchMenuItems($event)"
               ></sidebar-search>
               <li *ngFor="let mi of menu" 
                   class="menu-item">
                   <a [routerLink]="mi.routerLink">
                    <i class="{{ mi.icon }}"></i>
                    <span>{{ mi.label }}</span>
                    
                   </a>
               </li>
            </ul>
        </div>
    </div>
    
    `,
   styles: [
       ' li.menu-item a span { margin-left: 10px; } '
   ]
})
export class AppSidebarComponent extends DefaultJqueryComponent {
    
    
    
    private fullMenu:any[] = [
        { label: "Index", routerLink:"/", icon: "fam fam-application-home" },
        { label: "Regions", routerLink:"/region", icon: "fam fam-application-cascade" }
    ];
    
    private menu:any[];
    
    private lastSearch:string = "";

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
    
    
    buildJQueryPlugin(jqElement) {
        jqElement.find("#side-menu").metisMenu({
            activeClass: 'active'
        });
        
        this.menu = this.fullMenu;

    }
    
    searchMenuItems($event) {
        let isNarrowedSearch:boolean = $event != null && $event.indexOf(this.lastSearch) >= 0;
        let hasSearchData = this.menu.length > 0;

        
        if (isNarrowedSearch && hasSearchData) {
            this.menu = this.menu.findLike($event);
        } else {
            this.menu = this.fullMenu.findLike($event);
        }
        
        this.lastSearch = $event;
    }
    
    
       
}