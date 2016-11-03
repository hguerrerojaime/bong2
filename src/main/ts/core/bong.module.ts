import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { routing }        from '../init/app.routing';
import { SpinnerComponent } from '../components/index';
import { AlertManager, Notifier,SpinnerService } from '../core/index';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {DataTableModule} from "angular2-datatable";

@NgModule({
 
  imports: [
    BrowserModule,
    DataTableModule
  ],
  entryComponents: [SpinnerComponent],
  providers: [
    AlertManager,
    Notifier,
    SpinnerService
  ]
  
})
export class BongModule {}

