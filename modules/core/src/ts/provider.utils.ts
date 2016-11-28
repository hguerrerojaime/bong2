import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';


export class ProviderUtils {
    
    public static createAccessorProvider(component:any):any {
        return {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => component),
            multi: true
        };
    }
    
}