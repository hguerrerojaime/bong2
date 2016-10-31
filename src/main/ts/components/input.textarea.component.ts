import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { InputComponent } from './input.component';
import { ProviderUtils } from '../core/provider.utils';

@Component({
    selector: 'input-textarea',
    template: `
        <textarea class="form-control" rows="{{ rows }}"></textarea>
    `,
    providers: [
        ProviderUtils.createAccessorProvider(InputTextareaComponent)
    ]
})
export class InputTextareaComponent extends InputComponent<string> implements OnInit {
    
    @Input()
    textCase:string;
    
    @Input()
    rows:number = 5;
    
    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
    
    
    ngOnInit() {
        this.initCaseCSS(this.nativeElement);
        
        setTimeout(() => { this.changeTextCase(); }, 0);
    }
    
    private changeTextCase() {
        
        
        
        if (this.value) {
        
            if (this.textCase == 'lower') {
                this.value = this.value.toLowerCase();
            } else if(this.textCase == 'upper') {
                this.value = this.value.toUpperCase();
            }
        
        }
        
    }
    
    private initCaseCSS(inputText) {
        
        if (this.textCase == 'lower') {
            inputText.style['text-transform'] = "lowercase";
        } else if(this.textCase == 'upper') {
            inputText.style['text-transform'] = "uppercase";
        }
        
    }
    
}