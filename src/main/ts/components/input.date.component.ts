import { Component,Input } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { AgentFeatureSupportChecker } from '../core/agent.feature.support.checker';
import { ProviderUtils } from '../core/provider.utils';
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
export class InputDateComponent extends InputJqueryComponent {
    
    @Input()
    format:string = "YYYY-MM-DD";
    
    formattedValue:string = "";
        
    shouldBuildJQueryPlugin() {
        return true; //!AgentFeatureSupportChecker.supportsType('date');
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.datetimepicker({
            format:this.format
        });
        
        jqElement.on('dp.change',(event)=> { 

            this.value = utc(event.date);
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
            this.formattedValue = this.value.format(this.format);
        }

    }

    
}