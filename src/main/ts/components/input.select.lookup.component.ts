import { Component,Input,forwardRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ProviderUtils, ArrayUtils } from '../core/index';
import '@plugins/node/select2/dist/js/select2.min.js';

@Component({
    selector: 'input-select-lookup',
    template: `
       <select [(ngModel)]="value"
               (blur)="onBlur()"
               class="form-control input-{{size}}"
               [attr.multiple]="multiple ? 'multiple' : null"
       >
           <option *ngFor="let option of options" value="{{option.key}}">{{option.value}}</option>
       </select>
    `,
    providers: [ ProviderUtils.createAccessorProvider(InputSelectLookupComponent) ]
})
export class InputSelectLookupComponent extends InputJqueryComponent {
    
    @Input()
    multiple:boolean = false;
    
    @Input()
    tags:boolean = false;
    
    @Input()
    select2:boolean = false;
    
    @Input()
    size:string = "md";
    
    @Input()
    options:any[] = [];
       
        
    buildJQueryPlugin(jqElement) {
        
        if (this.select2) {
            let select2 = jqElement.select2();
 
            // jqElement.on('change',(event)=>{
            //     this.value = jqElement.val();
            // });
        }

    }
    
}