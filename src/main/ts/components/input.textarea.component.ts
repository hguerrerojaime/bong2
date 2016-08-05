import { Component, Input } from '@angular/core';

import { InputComponent } from './input.component';
import { TextOptionsDirective } from '@bong/directives';

@Component({
    selector: 'input-textarea',
    template: `
        <textarea class="form-control" text-options [textCase]="textCase" rows="{{ rows }}"></textarea>
    `,
    directives: [TextOptionsDirective]
})
export class InputTextareaComponent extends InputComponent {
    
    @Input()
    textCase:string;
    
    @Input()
    rows:number = 5;
    
}