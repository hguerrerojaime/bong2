
import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'app-menu',
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top shadow">
           <ng2-slim-loading-bar></ng2-slim-loading-bar>
           <app-navbar>
               <navbar-brand>
                   BONg2 v0.1-beta1
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