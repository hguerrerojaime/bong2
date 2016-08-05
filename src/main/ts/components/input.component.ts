import { ControlValueAccessor  } from '@angular/forms';

const noop = () => {};

export class InputComponent implements ControlValueAccessor {
    
    private innerValue:any;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    
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