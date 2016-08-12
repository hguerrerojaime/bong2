import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { InputComponent } from './input.component';
import { JqueryComponent } from './jquery.component';
import { AgentFeatureSupportChecker } from '@bong/services';

declare var jQuery:any;

export abstract class InputJqueryComponent extends InputComponent implements JqueryComponent, AfterViewInit {
    
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