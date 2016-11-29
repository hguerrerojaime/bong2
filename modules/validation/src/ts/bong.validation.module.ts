import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorBoxComponent } from './error.box.component';

const VALIDATION_COMPONENTS = [
    ErrorBoxComponent
];

@NgModule({
    imports: [ CommonModule ],
    declarations: VALIDATION_COMPONENTS,
    exports: VALIDATION_COMPONENTS
})
export class BongValidationModule {
    
}