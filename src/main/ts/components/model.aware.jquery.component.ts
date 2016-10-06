import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { ModelAwareComponent } from './model.aware.component';
import { JqueryComponent } from './jquery.component';
import { AgentFeatureSupportChecker } from '../services/index';

declare var jQuery:any;

export abstract class ModelAwareJqueryComponent extends ModelAwareComponent implements JqueryComponent, AfterViewInit {
    
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