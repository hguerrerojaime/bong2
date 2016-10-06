import { Inject, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ModelAwareComponent } from './model.aware.component';

export class InputComponent extends ModelAwareComponent {
    
    public requestFocus(select:boolean = false) : void {
        this.nativeElement.focus();
        
        if (select) {
            setTimeout(() => {
                this.select();
            },50);
        }
        
    }
    
    public select() {
        this.nativeElement.setSelectionRange(0,this.nativeElement.value.length);
    }
    
    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

}