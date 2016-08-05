import { Component,Input } from '@angular/core';
import { InputJqueryComponent } from '@bong/components';

import '@plugins/node/summernote/dist/summernote.js';

@Component({
    selector:'input-richtext',
    template: `
        <textarea></textarea>
    `
})
export class InputRichtextComponent extends InputJqueryComponent {
        
    @Input()
    height:number = 150;
    
    buildJQueryPlugin(jqElement) {
        jqElement.summernote({ height: this.height });
    }
   
     
}