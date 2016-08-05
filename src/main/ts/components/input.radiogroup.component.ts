import { Component } from '@angular/core';

@Component({
    selector: 'input-radiogroup',
    template: `
        <div>
            <div class="radio">
                <input type="radio" id="radio1" name="radio" />
                <label for="radio1">Option 1</label>
            </div>
            <div class="radio">
                <input type="radio" id="radio2" name="radio" />
                <label for="radio2">Option 2</label>
            </div>
        </div>
    `    
})
export class InputRadiogroupComponent {
    
}