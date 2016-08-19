import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import { InputComponent } from './input.component';
import { TextOptionsDirective } from '@bong/directives';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
};

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
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputTextComponent extends InputComponent {
        
    @Input()
    textCase:string;
    
    @Input()
    size:string = "md";

}