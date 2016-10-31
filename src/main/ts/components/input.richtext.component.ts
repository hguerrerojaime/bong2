import { Component,Input,ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';

import '@plugins/node/summernote/dist/summernote.js';

@Component({
    selector:'input-richtext',
    template: `
        <textarea></textarea>
    `
})
export class InputRichtextComponent extends InputJqueryComponent<string> {
        
    @Input()
    height:number = 150;

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.summernote({ height: this.height });
    }
   
     
}