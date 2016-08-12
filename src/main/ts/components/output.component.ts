import { Input, Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomUtils, ValueLoader } from '@bong/core';
import { InlineLoaderComponent } from './inline.loader.component';

@Component({
    selector: 'output',
    template: `
        <inline-loader *ngIf="isLoading"></inline-loader>{{ actualValue }}
    `,
    directives: [ InlineLoaderComponent ]
})
export class OutputComponent implements OnInit, ValueLoader {
        
    actualValue:string;
    
    private isLoading:boolean = false;
    
     constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    
    
    public set value(_value:any) {
        
        if (_value instanceof Observable) {
            this.isLoading = true;
        
            _value.subscribe((result) => {
                this.isLoading = false;
                this.actualValue = result;
            });
        } else {
            this.isLoading = false;
            this.actualValue = _value;
        }
        
    }


}