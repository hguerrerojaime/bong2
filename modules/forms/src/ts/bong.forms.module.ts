import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BongComponentsModule } from '../../../components/src/ts/bong.components.module';

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
	InputQueryBuilderComponent
	
} from './forms';



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
	InputQueryBuilderComponent
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

