import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
	PanelComponent,
	AccordionComponent,
	AccordionPanelComponent,
	DivRowComponent,
	ModalComponent,
	DivColComponent,
	CommandButtonComponent,
	LinkButtonComponent,
	InlineLoaderComponent,
	ContainerComponent,
	AlertComponent,
	SpinnerComponent

} from './index';

const BONG_COMPONENTS = [
  	PanelComponent,
	AccordionComponent,
	AccordionPanelComponent,
	DivRowComponent,
	ModalComponent,
	DivColComponent,
	CommandButtonComponent,
	LinkButtonComponent,
	InlineLoaderComponent,
	ContainerComponent,
	AlertComponent,
	SpinnerComponent
];


@NgModule({
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: BONG_COMPONENTS,
  imports: [
  	FormsModule,
  	CommonModule,
  	RouterModule
  ],
  exports: [ BONG_COMPONENTS, CommonModule ],
  entryComponents: [SpinnerComponent]
  
})
export class BongComponentsModule {}

