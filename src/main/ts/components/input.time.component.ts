import { Component } from '@angular/core';
import { InputJqueryComponent } from '@bong/components';
import { AgentFeatureSupportChecker } from '../core/agent.feature.support.checker';

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
    `
    //styleUrls: ['static/vendors/node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css']
})
export class InputTimeComponent extends InputJqueryComponent {
        
    shouldBuildJQueryPlugin() {
        return !AgentFeatureSupportChecker.supportsType('time');
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.datetimepicker({
            format:'HH:mm'
        });
    }

    
  
    
}