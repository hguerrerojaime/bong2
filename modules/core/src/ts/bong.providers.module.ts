import { NgModule } from '@angular/core';
import { AlertManager } from '../../../core/src/ts/alert.manager';
import { Notifier } from '../../../core/src/ts/notifier';
import { SpinnerService } from '../../../core/src/ts/spinner.service';


const PROVIDERS = [
	  AlertManager,
	  Notifier,
	  SpinnerService
];

@NgModule({
  providers: PROVIDERS
  
})
export class BongProvidersModule {}