import { Component,Input,forwardRef,ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ProviderUtils } from '../../../core/src/ts/provider.utils';
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
export class InputSelectLookupComponent extends InputJqueryComponent<any> {
    
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

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
       
    buildJQueryPlugin(jqElement) {
        
        if (this.select2) {
            let select2 = jqElement.select2();
 
            // jqElement.on('change',(event)=>{
            //     this.value = jqElement.val();
            // });
        }

    }
    
}