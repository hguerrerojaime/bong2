import { Inject, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from './base.component';

const noop = () => {};

export class ModelAwareComponent extends BaseComponent implements ControlValueAccessor {
    
    private innerValue:any;
    
    private onChangeCallback: (_: any) => void = noop;
    protected onTouchedCallback: () => void = noop;
    
    //get accessor
    public get value(): any {
        return this.innerValue;
    };
    
    //set accessor including call the onchange callback
    public set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    
    


}