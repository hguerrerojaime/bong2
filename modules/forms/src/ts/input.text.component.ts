import { Component, Input, OnInit,ElementRef,Output,EventEmitter } from '@angular/core';
import { InputComponent } from './input.component';

import { ProviderUtils } from '../../../core/src/ts/provider.utils';

@Component({
    selector: 'input-text',
    template: `
        <input type="text" 
               class="form-control input-{{size}}"
               [(ngModel)]="value"
               (ngModelChange)="changeTextCase()"
               (blur)="onBlur()"
               (focus)="onFocus()"
        />
    `,
    providers: [
        ProviderUtils.createAccessorProvider(InputTextComponent)
    ]
})
export class InputTextComponent extends InputComponent<string> implements OnInit {
        
    @Input()
    textCase:string;
    
    @Input()
    size:string = "md";

    @Output()
    blur:EventEmitter<any> = new EventEmitter();

    @Output()
    focus:EventEmitter<any> = new EventEmitter();

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

    onBlur() {
        super.onBlur();
        this.blur.emit(null);
    }

    onFocus() {
        this.focus.emit(null);
    }

}