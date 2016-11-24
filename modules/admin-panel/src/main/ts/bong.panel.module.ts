import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BongComponentsModule } from '../components/index';
import { RouterModule } from '@angular/router';
import { BongProvidersModule } from '../core/index';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { AppRoutingModule } from '../init/app.routing.module';

import { 
	AppComponent,
	AppBodyComponent,
	AppMenuComponent,
	AppNavbarComponent,
	AppSidebarComponent,
	SidebarSearchComponent

} from './index';

const AP_COMPONENTS = [
  	AppComponent,
	AppBodyComponent,
	AppMenuComponent,
	AppNavbarComponent,
	AppSidebarComponent,
	SidebarSearchComponent
];


@NgModule({
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: AP_COMPONENTS,
  imports: [
  	BongProvidersModule,
  	BongComponentsModule,
	SlimLoadingBarModule.forRoot(),
	AppRoutingModule,
	FormsModule,
	BrowserModule
  ],
  exports: [ AP_COMPONENTS, BongComponentsModule, BongProvidersModule ]
  
})
export class BongPanelModule {}