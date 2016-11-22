import { Injectable } from '@angular/core';
import { TModel } from '../types/t.model';
import { ConstraintMap } from './constraint.map';
import { ValidatorFn, FormControl, Validators } from '@angular/forms';

@Injectable()
export class Validator {
    
    validate<T extends TModel> (model:T):boolean {
        
        let constraints:ConstraintMap = model.constructor["constraints"];
        
        for (let key in constraints) {
            
            let fieldConstraints:ValidatorFn[] = constraints[key];
            let value:any = model[key];
            let errors = this.getFieldErrors(value,fieldConstraints);
            
            
            if (errors.length > 0) {
                model.errors[key] = errors;
            }
        }
        
        return Object.keys(model.errors).length == 0;
    }
    
    private getFieldErrors(value:any,fieldConstraints:ValidatorFn[]):any[] {
        
        let errors:any[]  = [];
        
        let control:FormControl = new FormControl('yes',fieldConstraints);
        control.setValue(value);
        
        if (control.invalid) {
            errors.push(control.errors);
        }
        
        return errors;
        
    }
    
}