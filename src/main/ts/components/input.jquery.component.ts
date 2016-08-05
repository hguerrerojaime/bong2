import { ElementRef,Inject, AfterViewInit } from '@angular/core';
import { InputComponent } from './input.component';
import { JqueryComponent } from './jquery.component';
import { AgentFeatureSupportChecker } from '@bong/services';

declare var jQuery:any;

export abstract class InputJqueryComponent extends InputComponent implements JqueryComponent, AfterViewInit {
    
    private jqElement;
    
    constructor(
        @Inject(ElementRef) public elementRef: ElementRef,
        @Inject(AgentFeatureSupportChecker) public featureSupportChecker: AgentFeatureSupportChecker
    ) { 
        super();
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