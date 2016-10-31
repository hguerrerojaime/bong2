import { Component,ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { AgentFeatureSupportChecker } from '../core/agent.feature.support.checker';
import { ProviderUtils } from '../core/provider.utils';

import '@plugins/node/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@Component({
    selector: 'input-time',
    template: `
       <div class='input-group date'>
        <input type='time' class="form-control" />
        <span class="input-group-addon">
            <span class="fa fa-clock-o"></span>
        </span>
       </div>
    `,
    providers: [
        ProviderUtils.createAccessorProvider(InputTimeComponent)
    ]
    //styleUrls: ['static/vendors/node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css']
})
export class InputTimeComponent extends InputJqueryComponent<any> {

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
        
    shouldBuildJQueryPlugin() {
        return !AgentFeatureSupportChecker.supportsType('time');
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.datetimepicker({
            format:'HH:mm'
        });
    }

    
  
    
}