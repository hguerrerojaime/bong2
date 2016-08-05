import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from '../app/app.component';
import { AgentFeatureSupportChecker } from '@bong/services';
import {enableProdMode} from "@angular/core";
import { disableDeprecatedForms, provideForms } from '@angular/forms';

enableProdMode();

bootstrap(AppComponent, [
    AgentFeatureSupportChecker,
    disableDeprecatedForms(),
    provideForms()
]);