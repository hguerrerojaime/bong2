import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import { InputComponent } from './input.component';
import { TextOptionsDirective } from '../directives/text.options.directive';
import { ProviderUtils } from '../core/provider.utils';

@Component({
    selector: 'input-text',
    template: `
        <input type="text" 
               class="form-control input-{{size}}"
               [textCase]="textCase"
               [(ngModel)]="value"
               (blur)="onBlur()"
               text-options       
        />
    `,
    directives: [TextOptionsDirective],
    providers: [
        ProviderUtils.createAccessorProvider(InputTextComponent)
    ]
})
export class InputTextComponent extends InputComponent {
        
    @Input()
    textCase:string;
    
    @Input()
    size:string = "md";

}