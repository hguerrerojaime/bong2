import { Inject, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from './base.component';

const noop = () => {};

export class InputComponent extends BaseComponent implements ControlValueAccessor {
    
    private innerValue:any;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    
    constructor(
        @Inject(ElementRef) public elementRef: ElementRef
    ) { 
        super(elementRef);
    }
    
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