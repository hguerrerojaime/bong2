import { Component,Input } from '@angular/core';
import { InputJqueryComponent } from '@bong/components';

import '@plugins/node/select2/dist/js/select2.min.js';

@Component({
    selector: 'input-select',
    template: `
       <select class="form-control" [attr.multiple]="multiple ? 'multiple' : null">
           <option value="A">Letter A</option>
       </select>
    `
})
export class InputSelectComponent extends InputJqueryComponent {
        
    @Input()
    multiple:boolean = false;
    
    @Input()
    tags:boolean = false;
    
    @Input()
    select2:boolean = false;
        
    buildJQueryPlugin(jqElement) {
        
        if (this.select2 || this.tags) {
            jqElement.select2({
                tags: this.tags 
            });
        }
    }
    
}