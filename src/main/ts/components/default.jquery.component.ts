import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { JqueryComponent } from './jquery.component';
import { BaseComponent } from './base.component';

declare var jQuery:any;

export abstract class DefaultJqueryComponent extends BaseComponent implements JqueryComponent, AfterViewInit {
    
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
    
}