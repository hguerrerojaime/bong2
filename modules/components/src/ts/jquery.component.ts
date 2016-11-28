import { ElementRef, AfterViewInit } from '@angular/core';


export interface JqueryComponent {

    initJQueryElement():void;
  
    shouldBuildJQueryPlugin():boolean;
    
    buildJQueryPlugin(jqElement):void;
    
}