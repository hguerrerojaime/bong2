import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { 
	InputTextComponent,
	InputRichtextComponent,
	InputCheckboxComponent,
	LookupGridComponent,
	PanelComponent,
	AccordionComponent,
	AccordionPanelComponent,
	InputRadiogroupComponent,
	SubmitButtonComponent,
	DivRowComponent,
	ModalComponent,
	OutputComponent,
	InputTimeComponent,
	InputNumberComponent,
	FormElementComponent,
	InputDatetimeComponent,
	InputLookupComponent,
	InputDateComponent,
	InputCurrencyComponent,
	DivColComponent,
	InputSelectComponent,
	InputSelectLookupComponent,
	InputTextareaComponent,
	CommandButtonComponent,
	LinkButtonComponent,
	InlineLoaderComponent,
	InputDetailGridComponent,
	InputDetailGridColumnComponent,
	ContainerComponent,
	AlertComponent,
	SpinnerComponent,
	InputQueryBuilderComponent,
	KeyCombinationDirective,

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
  	InputTextComponent,
	InputRichtextComponent,
	InputCheckboxComponent,
	LookupGridComponent,
	PanelComponent,
	AccordionComponent,
	AccordionPanelComponent,
	InputRadiogroupComponent,
	SubmitButtonComponent,
	DivRowComponent,
	ModalComponent,
	OutputComponent,
	InputTimeComponent,
	InputNumberComponent,
	FormElementComponent,
	InputDatetimeComponent,
	InputLookupComponent,
	InputDateComponent,
	InputCurrencyComponent,
	DivColComponent,
	InputSelectComponent,
	InputSelectLookupComponent,
	InputTextareaComponent,
	CommandButtonComponent,
	LinkButtonComponent,
	InlineLoaderComponent,
	InputDetailGridComponent,
	InputDetailGridColumnComponent,
	ContainerComponent,
	AlertComponent,
	SpinnerComponent,
	InputQueryBuilderComponent,
	KeyCombinationDirective
];


@NgModule({
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: BONG_COMPONENTS,
  imports: [
  	FormsModule,
  	CommonModule
  ],
  exports: [ BONG_COMPONENTS, CommonModule ],
  entryComponents: [SpinnerComponent]
  
})
export class BongFormsComponentsModule {}

