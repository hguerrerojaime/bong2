import { Component,Input,forwardRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';

import { NG_VALUE_ACCESSOR  } from '@angular/forms';

import '@plugins/node/select2/dist/js/select2.min.js';


const INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectComponent),
    multi: true
};

@Component({
    selector: 'input-select',
    template: `
       <select [(ngModel)]="value" 
               (blur)="onBlur()"
               class="form-control input-{{size}}"
               [attr.multiple]="multiple ? 'multiple' : null"
       >
           <option *ngFor="let option of options" value="{{option.key}}">{{option.value}}</option>
       </select>
    `,
    providers: [ INPUT_CONTROL_VALUE_ACCESSOR ]
})
export class InputSelectComponent extends InputJqueryComponent {
        
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
        
        if (this.select2 || this.tags) {
            jqElement.select2({
                tags: this.tags 
            });
        }
    }
    
}