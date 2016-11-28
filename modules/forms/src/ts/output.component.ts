import { Input, Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DomUtils } from '../../../core/src/ts/dom.utils';
import { ValueLoader } from '../../../core/src/ts/value.loader';
import { InlineLoaderComponent } from '../../../components/src/ts/inline.loader.component';

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
    
    @Input()
    public set value(_value:any) {
        this.actualValue = _value;
    }
    
    public get value(): any {
        return this.actualValue;
    }

}