import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { routing }        from '../init/app.routing';
import { BongPanelModule } from '../admin-panel/index';
import { BongComponentsModule } from '../components/index';
import { AlertManager, Notifier,SpinnerService } from '../core/index';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }    from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    BongComponentsModule
  ],
 
  providers: [
    AlertManager,
    Notifier,
    SpinnerService
  ],
  exports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    BongComponentsModule
  ]
  
})
export class BongModule {}

