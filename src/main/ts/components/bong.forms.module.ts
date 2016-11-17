import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { 
	InputTextComponent,
	InputRichtextComponent,
	InputCheckboxComponent,
	LookupGridComponent,
	InputRadiogroupComponent,
	SubmitButtonComponent,
	OutputComponent,
	InputTimeComponent,
	InputNumberComponent,
	FormElementComponent,
	InputDatetimeComponent,
	InputLookupComponent,
	InputDateComponent,
	InputCurrencyComponent,
	InputSelectComponent,
	InputSelectLookupComponent,
	InputTextareaComponent,
	InputDetailGridComponent,
	InputDetailGridColumnComponent,
	InputQueryBuilderComponent,
	KeyCombinationDirective,
	BongComponentsModule

} from './index';



const BONG_COMPONENTS = [
	InputTextComponent,
	InputRichtextComponent,
	InputCheckboxComponent,
	LookupGridComponent,
	InputRadiogroupComponent,
	SubmitButtonComponent,
	OutputComponent,
	InputTimeComponent,
	InputNumberComponent,
	FormElementComponent,
	InputDatetimeComponent,
	InputLookupComponent,
	InputDateComponent,
	InputCurrencyComponent,
	InputSelectComponent,
	InputSelectLookupComponent,
	InputTextareaComponent,
	InputDetailGridComponent,
	InputDetailGridColumnComponent,
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
  	CommonModule,
	BongComponentsModule
  ],
  exports: [ BONG_COMPONENTS, CommonModule, FormsModule ]
  
})
export class BongFormsModule {}

