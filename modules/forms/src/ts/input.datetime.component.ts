import { Component, ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { AgentFeatureSupportChecker } from '../core/agent.feature.support.checker';

import '@plugins/node/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@Component({
    selector: 'input-datetime',
    template: `
       <div class='input-group date'>
        <input type='datetime-local' class="form-control" />
        <span class="input-group-addon">
            <span class="fa fa-calendar-o"></span>
        </span>
      </div>
    `
    //styleUrls: ['static/vendors/node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css']
})
export class InputDatetimeComponent extends InputJqueryComponent<any> {

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
        
    shouldBuildJQueryPlugin() {
        return !AgentFeatureSupportChecker.supportsType('datetime-local');
    }
        
    buildJQueryPlugin(jqElement) {
        jqElement.datetimepicker({
            sideBySide:true    
        });
    }
    
}