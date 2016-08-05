import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { AgentFeatureSupportChecker } from '@bong/services';
import { JqueryComponent } from './jquery.component';

declare var jQuery:any;

export abstract class DefaultJqueryComponent implements JqueryComponent, AfterViewInit {
    
    private jqElement;
    
    constructor(
        @Inject(ElementRef) public elementRef: ElementRef,
        @Inject(AgentFeatureSupportChecker) public featureSupportChecker: AgentFeatureSupportChecker
    ) { 
    }
    
    ngAfterViewInit() {
        this.initComponent();    
    }
    
    initJQueryElement(elementRef:ElementRef) {
        let element = elementRef.nativeElement.children[0];
        this.jqElement = jQuery(element);
    }
     
    
    initComponent() {
        this.initJQueryElement(this.elementRef);
        
        if (this.shouldBuildJQueryPlugin()) {
            this.buildJQueryPlugin(this.jqElement);
        }    
    }
    
    shouldBuildJQueryPlugin():boolean { return true; }
    
}