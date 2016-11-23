import { Component,Input } from '@angular/core';

@Component({
    selector: 'input-checkbox',
    template: `
        <div class="checkbox checkbox-{{brand}}">
            <input type="checkbox" class="styled styled-{{brand}}" />
            <label></label>
        </div>
    `
})
export class InputCheckboxComponent {
        
    @Input()
    brand:string = "default";
    
}