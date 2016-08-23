import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';


export class ProviderUtils {
    
    public static createAccessorProvider(component:Type) {
        return {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => component),
            multi: true
        };
    }
    
}