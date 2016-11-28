import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { InputComponent } from './input.component';
import { JqueryComponent } from '../../../components/src/ts/jquery.component';

declare var jQuery:any;

export abstract class InputJqueryComponent<T> extends InputComponent<T>
                               implements JqueryComponent, AfterViewInit {
    
    public jqElement;

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
    
    ngAfterViewInit() {
        this.initComponent();    
    }
    
    initJQueryElement() {
        this.jqElement = jQuery(this.nativeElement);
    }
     
    
    initComponent() {
        this.initJQueryElement();
        
        if (this.shouldBuildJQueryPlugin()) {
            this.buildJQueryPlugin(this.jqElement);
        }    
    }
    
    shouldBuildJQueryPlugin():boolean { return true; }

    abstract buildJQueryPlugin(jqElement:any):void;
    
}