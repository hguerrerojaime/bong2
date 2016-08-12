import { ElementRef, AfterViewInit } from '@angular/core';
import { AgentFeatureSupportChecker } from '@bong/services';


export interface JqueryComponent {

    initJQueryElement():void;
  
    shouldBuildJQueryPlugin():boolean;
    
    buildJQueryPlugin(jqElement):void;
    
}