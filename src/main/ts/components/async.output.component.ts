import { Input, Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomUtils, ValueLoader } from '@bong/core';
import { InlineLoaderComponent } from './inline.loader.component';

@Component({
    selector: 'async-output',
    template: `
        <inline-loader *ngIf="isLoading"></inline-loader>{{ actualValue }}
    `,
    directives: [ InlineLoaderComponent ]
})
export class AsyncOutputComponent implements OnInit, ValueLoader {
        
    actualValue:string;
    
    private isLoading:boolean = false;
    
     constructor(@Inject(ElementRef) private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    ngOnInit() {
        DomUtils.unwrapElement(this.elementRef);    
    }
    

    loadValue(value:Observable<any>) {
        
        this.actualValue = "";
        
        this.isLoading = true;
        
        value.subscribe((result) => {
            this.isLoading = false;
            this.actualValue = result;
        });
        
    }
}