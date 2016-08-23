import { Component,ElementRef,OnInit,OnDestroy,ViewChild,Inject } from '@angular/core';
import { InputNumberComponent } from './input.number.component';
import { ProviderUtils } from '../core/provider.utils';

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
            <input [(ngModel)]="value" 
                (blur)="onBlur()"
                type="number"
                class="form-control" 
                value="1" min="-10" max="40" step=".01">
            <span class="input-group-btn data-up">
                <button class="btn btn-default" data-dir="up"><span class="fa fa-plus"></span></button>
            </span>
      </div>
      <div class="input-group number-spinner" *ngIf="!shouldBuildJQueryPlugin()">
            <span class="input-group-addon">
                <span class="fa fa-usd"></span>
            </span>
            <input [(ngModel)]="value" 
                (blur)="onBlur()"
                type="number" 
                class="form-control" 
                value="1" min="-10" max="40" step=".01">
      </div>

    `,
    providers: [ ProviderUtils.createAccessorProvider(InputCurrencyComponent) ]
})
export class InputCurrencyComponent extends InputNumberComponent {

    
}