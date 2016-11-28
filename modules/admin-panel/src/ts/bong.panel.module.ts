import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BongProvidersModule } from '../../../core/src/ts/bong.providers.module';
import { BongComponentsModule } from '../../../components/src/ts/bong.components.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


import { 
	AppComponent,
	AppBodyComponent,
	AppMenuComponent,
	AppNavbarComponent,
	AppSidebarComponent,
	SidebarSearchComponent

} from './admin.panel';

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
	RouterModule,
	FormsModule,
	BrowserModule
  ],
  exports: [ AP_COMPONENTS, BongProvidersModule ]
  
})
export class BongPanelModule {}
