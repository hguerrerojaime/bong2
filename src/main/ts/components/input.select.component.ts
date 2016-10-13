import { Component,Input,forwardRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ProviderUtils } from '../core/provider.utils';
import '@plugins/node/select2/dist/js/select2.min.js';

@Component({
    selector: 'input-select',
    template: `
       <select 
               class="form-control input-{{size}}"
               [attr.multiple]="multiple ? 'multiple' : null"
       >
           <option *ngFor="let option of options" value="{{option.key}}">{{option.value}}</option>
       </select>
    `,
    providers: [ ProviderUtils.createAccessorProvider(InputSelectComponent) ]
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
            let select2 = jqElement.select2({
                tags: this.tags 
            });
            
            jqElement.select2('val',"A"); 
            
            console.log(jqElement.val());
 
            setTimeout(()=>{
                
                
                
                jqElement.on('change',(event)=>{
                    this.value = jqElement.val();
                });
            },0);
        }
        
        
    }
    
    
}