import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BongComponentsModule } from '../components/index';
import { AlertManager, Notifier, SpinnerService } from '../core/index';


const PROVIDERS = [
	  AlertManager,
	  Notifier,
	  SpinnerService
];

@NgModule({
  providers: PROVIDERS
  
})
export class BongProvidersModule {}