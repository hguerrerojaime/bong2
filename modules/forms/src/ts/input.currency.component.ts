import { Component,ElementRef,OnInit,OnDestroy,ViewChild,Inject } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ProviderUtils } from '../core/provider.utils';
import { AgentFeatureSupportChecker } from '../core/index';
import { TCurrency } from '../types/index';

import {
    DivRowComponent,
    DivColComponent,
    CommandButtonComponent,
    ModalComponent,
    ContainerComponent
} from '../../../types/index';

declare var jQuery;

@Component({
    selector: 'input-currency',
    template: `
       <div class="input-group number-spinner" *ngIf="shouldBuildJQueryPlugin()">
            <span class="input-group-addon">
                <span class="fa fa-usd"></span>
            </span>
            <span class="input-group-btn data-dwn">
                <button class="btn btn-default" data-dir="dwn"><span class="fa fa-minus"></span></button>
            </span>
            <input [(ngModel)]="ammount" 
                (blur)="onBlur()"
                type="number"
                class="form-control"
                (ngModelChange)="updateValue()"
                value="1" min="-10" max="40" step=".01">
            <span class="input-group-btn data-up">
                <button class="btn btn-default" data-dir="up"><span class="fa fa-plus"></span></button>
            </span>
      </div>
      <div class="input-group number-spinner" *ngIf="!shouldBuildJQueryPlugin()">
            <span class="input-group-addon">
                <span class="fa fa-usd"></span>
            </span>
            <input [(ngModel)]="ammount" 
                (blur)="onBlur()"
                type="number" 
                class="form-control"
                (ngModelChange)="updateValue()"
                value="1" min="-10" max="40" step=".01">
      </div>

    `,
    providers: [ ProviderUtils.createAccessorProvider(InputCurrencyComponent) ]
})
export class InputCurrencyComponent extends InputJqueryComponent<TCurrency> implements OnInit{

    private ammount:number;

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }

    ngOnInit() {
        setTimeout(() => {
            this.ammount = this.value.ammount;
        },0);
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

    private updateValue() {
        this.value.ammount = this.ammount;
    }

}