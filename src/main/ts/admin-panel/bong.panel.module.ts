import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BongComponentsModule } from '../components/index';

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
  	BongComponentsModule
  ],
  exports: [ AP_COMPONENTS, BongComponentsModule ]
  
})
export class BongPanelModule {}
