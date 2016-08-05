import { Component,Input } from '@angular/core';
import { DivColComponent } from './div.col.component';
 
@Component({
    selector: 'form-element',
    template: `
        <div class="form-group">
          <label class="col-md-{{labelWidth}} control-label">{{label}}</label>
          <div-col width="{{ 12 - labelWidth }}">
            <ng-content></ng-content>
          </div-col>
        </div>
    `,
    directives: [ DivColComponent ]
})
export class FormElementComponent {
    
    @Input()
    labelWidth:number = 3;
    
    @Input()
    label:string = "Label";
}