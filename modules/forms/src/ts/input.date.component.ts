import { Component,Input,ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ProviderUtils } from '../../../core/src/ts/provider.utils';
import { AgentFeatureSupportChecker } from '../../../core/src/ts/agent.feature.support.checker';
import { TDate } from '../../../types/src/ts/t.date';
import { utc } from 'moment/moment';

declare var jQuery:any;

import '@plugins/node/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@Component({
    selector: 'input-date',
    template: `
      <div class='input-group date'>
        <input 
            [(ngModel)]="formattedValue" 
            (blur)="onBlur()"
            type='text' 
            class="form-control"
        />
        <span class="input-group-addon">
            <span class="fa fa-calendar"></span>
        </span>
      </div>
    `,
    providers: [ ProviderUtils.createAccessorProvider(InputDateComponent) ]
    //styleUrls: ['static/vendors/node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css']
})
export class InputDateComponent extends InputJqueryComponent<TDate> {
    
    @Input()
    format:string = "YYYY-MM-DD";
    
    formattedValue:string = "";

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
        
    shouldBuildJQueryPlugin() {
        return true; //!AgentFeatureSupportChecker.supportsType('date');
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.datetimepicker({
            format:this.format
        });
        
        jqElement.on('dp.change',(event)=> { 

            this.changeValue(event.date);
        });
        
        setTimeout(() => { this.formatDate() },0);
    }
    
    onBlur() {
        this.parseDate();
        
        super.onBlur();
        
    }
    
    private parseDate() {
        
        let date:any = new Date(this.formattedValue);
        
        
        if (date == "Invalid Date") {
            this.value = null;
        }
        
    }
    
    private formatDate() {

        if(this.value) {
            this.formattedValue = this.value.nativeValue.format(this.format);
        }

    }

    private changeValue(newValue) {
        this.value.nativeValue = utc(newValue);
    }

    
}