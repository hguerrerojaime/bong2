import { Component,Input,forwardRef,ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ProviderUtils } from '../../../core/src/ts/provider.utils';
import '@plugins/node/select2/dist/js/select2.min.js';

import '../../../prototypes/src/ts/array';

declare var jQuery;

@Component({
    selector: 'input-select',
    template: `
       <select *ngIf="multiple"
               [(ngModel)]="value"
               (blur)="onBlur()"
               class="form-control input-{{size}}"
               multiple
       >
           <option *ngFor="let option of allOptions" [value]="option">{{option}}</option>
       </select>
       <select *ngIf="!multiple"
               [(ngModel)]="value"
               (blur)="onBlur()"
               class="form-control input-{{size}}"
       >
           <option *ngFor="let option of allOptions" [value]="option">{{option}}</option>
       </select>
    `,
    providers: [ ProviderUtils.createAccessorProvider(InputSelectComponent) ]
})
export class InputSelectComponent extends InputJqueryComponent<string[]> {
    
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
    
    private allOptions:any[] = [];

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
    
        
    buildJQueryPlugin(jqElement) {

        
        if (this.select2 || this.tags) {
            
            
            
 
            setTimeout(()=>{
                this.initAllOptions();

                jQuery.fn.select2.amd.require(['select2/selection/search'], (Search) => {
                    
                    var oldRemoveChoice = Search.prototype.searchRemoveChoice;

                    Search.prototype.searchRemoveChoice = function () {
                        oldRemoveChoice.apply(this, arguments);
                        this.$search.val('');
                    };
                    
                    jqElement.select2({
                        tags: this.tags 
                    });
                    
                    
                    jqElement.on('change',(event)=>{
                        let tmpValues = jqElement.val().replaceAll(new RegExp("([0-9]:\\s){1}",'g'),"");
                        this.value = tmpValues.replaceAll(new RegExp("'",'g'),"");
                    });

                });

            },0);
        }
        
        
    }
    
    private initAllOptions() {
        if (this.tags && this.value) {
            this.allOptions =  this.options.concat(this.value).unique();
        } else {
            this.allOptions = this.options;
        }
    }
    
    
}