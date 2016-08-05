import { Component } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';

declare var jQuery:any;

import '@plugins/node/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@Component({
    selector: 'input-date',
    template: `
       <div class='input-group date'>
        <input type='date' class="form-control" />
        <span class="input-group-addon">
            <span class="fa fa-calendar"></span>
        </span>
      </div>
    `
    //styleUrls: ['static/vendors/node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css']
})
export class InputDateComponent extends InputJqueryComponent {
        
    shouldBuildJQueryPlugin() {
        return !this.featureSupportChecker.supportsType('date');
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.datetimepicker({
            format:'YYYY-MM-DD'
        });
    }

    
}