import { Component, Input } from '@angular/core';
import { InputComponent } from './input.component';
import { TextOptionsDirective } from '@bong/directives';
import { ProviderUtils } from '../core/provider.utils';

@Component({
    selector: 'input-textarea',
    template: `
        <textarea class="form-control" text-options [textCase]="textCase" rows="{{ rows }}"></textarea>
    `,
    directives: [TextOptionsDirective],
    providers: [
        ProviderUtils.createAccessorProvider(InputTextareaComponent)
    ]
})
export class InputTextareaComponent extends InputComponent {
    
    @Input()
    textCase:string;
    
    @Input()
    rows:number = 5;
    
}