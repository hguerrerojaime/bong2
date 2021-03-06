import { Component,Inject,ViewChild, OnInit } from '@angular/core';
import { Router,Event,NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import { AlertComponent } from '../../../components/src/ts/alert.component';
import { AlertManager } from '../../../core/src/ts/alert.manager';

declare var jQuery:any;

@Component({
  selector: 'app',
  template: `
        
        <div id="wrapper">
          <app-menu></app-menu>
          <div id="page-wrapper" style="min-height: 261px;">
            <inline-loader *ngIf="loading"></inline-loader>
            <div [ngClass]="{hidden:loading}">
              <app-body></app-body>
            </div>
          </div>
          <alert #alert></alert>
        </div>
        
  `
})
export class AppComponent implements OnInit {
  
  private loading:boolean = false;
  
  @ViewChild("alert")
  private alert:AlertComponent;
  
  
  
  constructor(
    @Inject(Router) private router: Router,
    @Inject(SlimLoadingBarService) private slimLoadingBarService:SlimLoadingBarService,
    @Inject(AlertManager) private alertManager
  ) {
    
      router.events.subscribe((event) => {
        
        
         if (event instanceof NavigationStart) {
            this.loading = true;
            this.slimLoadingBarService.start(() => {});
         } else if (event instanceof NavigationEnd) {
            this.loading = false; 
            this.slimLoadingBarService.complete();
         } else if (event instanceof NavigationError) {
           this.slimLoadingBarService.complete();
           this.loading = false;
           this.alertManager.messageError(event.error);
         }
         
      });
  }
  
  ngOnInit() {
     this.alertManager.alert = this.alert;
     
  }

}