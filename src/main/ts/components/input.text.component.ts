import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import { InputComponent } from './input.component';

import { ProviderUtils } from '../core/provider.utils';

@Component({
    selector: 'input-text',
    template: `
        <input type="text" 
               class="form-control input-{{size}}"
               [(ngModel)]="value"
               (ngModelChange)="changeTextCase()"
               (blur)="onBlur()"    
        />
    `,
    providers: [
        ProviderUtils.createAccessorProvider(InputTextComponent)
    ]
})
export class InputTextComponent extends InputComponent implements OnInit {
        
    @Input()
    textCase:string;
    
    @Input()
    size:string = "md";
    
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