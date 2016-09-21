import { Component,Inject } from '@angular/core';
import { Router,Event,NavigationStart, NavigationEnd } from '@angular/router';
import { AppBodyComponent } from './app.body.component.ts'
import { AppMenuComponent } from './app.menu.component';
import {SlimLoadingBarService, SlimLoadingBarComponent} from 'ng2-slim-loading-bar';

declare var jQuery:any;

@Component({
  selector: 'app',
  template: `
        
        <div id="wrapper">
          <app-menu></app-menu>
          <div id="page-wrapper" style="min-height: 261px;">
            <app-body></app-body>
          </div>
        </div>
        <ng2-slim-loading-bar></ng2-slim-loading-bar>
  `,
  providers: [SlimLoadingBarService]
})
export class AppComponent {
  
  constructor(
    @Inject(Router) private router: Router,
    @Inject(SlimLoadingBarService) private slimLoadingBarService:SlimLoadingBarService
  ) {
    
      console.log(this.slimLoadingBarService);

      router.events.subscribe((event) => {
        
         this.slimLoadingBarService.start();
 
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      }
  }

}