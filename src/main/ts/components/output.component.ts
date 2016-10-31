import { Input, Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomUtils, ValueLoader } from '../core/index';
import { InlineLoaderComponent } from './inline.loader.component';

@Component({
    selector: 'output',
    template: `
        <inline-loader *ngIf="loading"></inline-loader>{{ !loading ? actualValue : '' }}
    `
})
export class OutputComponent implements OnInit {
        
    actualValue:string;
    
    loading:boolean = false;
    
     constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    
    
    public set value(_value:any) {
        this.actualValue = _value;
    }


}