
import { Component, OnInit } from '@angular/core';
import { AppNavbarComponent } from './app.navbar.component';
import { AppSidebarComponent } from './app.sidebar.component';

declare var jQuery:any;

@Component({
    selector: 'app-menu',
    directives: [AppNavbarComponent, AppSidebarComponent],
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
           <app-navbar>
               <navbar-brand>
                   CRM-NG2
               </navbar-brand>
           </app-navbar>
           <app-sidebar></app-sidebar>
        </nav>
   `
})
export class AppMenuComponent implements OnInit {
        
    ngOnInit() {
        var width, height, topOffset;
        
        jQuery(window).bind("resize", function() {
            topOffset = 40;
            width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            if (width < 768) {
                jQuery('div.navbar-collapse').addClass('collapse');
                topOffset = 100; // 2-row-menu
            } else {
                jQuery('div.navbar-collapse').removeClass('collapse');
            }

            height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                jQuery("#page-wrapper").css("min-height", (height) + "px");
            }
            
        });
        
        jQuery(window).trigger("resize");
    }
    
}