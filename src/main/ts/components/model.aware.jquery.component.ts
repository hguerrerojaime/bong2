import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { ModelAwareComponent } from './model.aware.component';
import { JqueryComponent } from './jquery.component';

declare var jQuery:any;

export abstract class ModelAwareJqueryComponent<T> extends ModelAwareComponent<T> implements JqueryComponent, AfterViewInit {
    
    private jqElement;
    
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

    abstract buildJQueryPlugin(jqElement):void;
    
}