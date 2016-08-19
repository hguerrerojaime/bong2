import { Component, OnInit,Inject,ElementRef } from '@angular/core';
import { SidebarSearchComponent } from './sidebar.search.component';
import { DefaultJqueryComponent, MenuItemComponent } from '@bong/components';

import '@plugins/node/metismenu/dist/metisMenu.js';

declare var jQuery:any;


@Component({
  selector: 'app-sidebar',
  template: `
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav in" id="side-menu">
               <sidebar-search></sidebar-search>
               <menu-item liClass="menu-item" routerLink="/">
                  Index
               </menu-item>
               <menu-item liClass="menu-item" routerLink="/forms">
                  Forms
               </menu-item>
               <menu-item liClass="menu-item" routerLink="/tables">
                  Tables
               </menu-item>
            </ul>
        </div>
    </div>
    
    `,
   directives: [ SidebarSearchComponent,MenuItemComponent ]
})
export class AppSidebarComponent implements DefaultJqueryComponent {
    
    buildJQueryPlugin(jqElement) {
        jqElement.find("#side-menu").metisMenu({
            activeClass: 'active'
        });
    }
       
}