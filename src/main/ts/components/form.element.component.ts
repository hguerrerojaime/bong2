import { Component,Input, OnInit } from '@angular/core';
import { DivColComponent } from './div.col.component';
 
@Component({
    selector: 'form-element',
    template: `
        <div class="form-group">
          <label *ngIf="label != null" class="col-md-{{labelWidth}} control-label">{{label}}</label>
          <div-col width="{{ 12 - labelWidth }}">
            <ng-content></ng-content>
          </div-col>
        </div>
    `,
    directives: [ DivColComponent ]
})
export class FormElementComponent implements OnInit {
    
    @Input()
    labelWidth:number;
    
    @Input()
    label:string;
    
    ngOnInit() {
        
        if ( this.labelWidth == null && this.label != null ) {
            this.labelWidth = 3;
        }
        
    }
}