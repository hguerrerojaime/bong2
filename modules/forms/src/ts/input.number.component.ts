import { Component,ElementRef,OnInit,OnDestroy,ViewChild,Inject } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { AgentFeatureSupportChecker } from '../../../core/src/ts/agent.feature.support.checker';

declare var jQuery:any;

@Component({
    selector: 'input-number',
    template: `
        
       <div class="input-group number-spinner" *ngIf="shouldBuildJQueryPlugin()">
            <span class="input-group-btn data-dwn">
                <button class="btn btn-default" data-dir="dwn"><span class="fa fa-minus"></span></button>
            </span>
            <input type="number" class="form-control" value="1" min="-10" max="40">
            <span class="input-group-btn data-up">
                <button class="btn btn-default" data-dir="up"><span class="fa fa-plus"></span></button>
            </span>
      </div>
      <input type="number" class="form-control" value="1" min="-10" max="40" *ngIf="!shouldBuildJQueryPlugin()">

    `
    //styleUrls: ['static/vendors/node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css']
})
export class InputNumberComponent extends InputJqueryComponent<number> {

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
        
    shouldBuildJQueryPlugin() {
        return !AgentFeatureSupportChecker.supportsType('number');
    }
      
    buildJQueryPlugin(jqElement) {
               
        var action;
        jqElement.find('button').mousedown(function () {
            let btn = jQuery(this);
            let input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);
    
            if (btn.attr('data-dir') == 'up') {
                action = setInterval(function(){
                    if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                        input.val(parseInt(input.val())+1);
                    }else{
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            } else {
                action = setInterval(function(){
                    if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                        input.val(parseInt(input.val())-1);
                    }else{
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            }
        }).mouseup(function(){
            clearInterval(action);
        });
    }
    
    
    
    
    
}