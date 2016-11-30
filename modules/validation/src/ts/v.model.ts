import { ErrorMap } from './error.map';
import { ConstraintMap } from './constraint.map';

import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { TModel } from '../../../types/src/ts/t.model';


export abstract class VModel extends TModel {

	static constraints:ConstraintMap = {};
	private _errors:ErrorMap = {};

	get errors():ErrorMap {
		return this._errors;
	}

	hasErrors(validate:boolean = true):boolean {

		if (validate) {
			this.validate();
		}

		return Object.keys(this.errors).length > 0;
	}

	validate():boolean {

		let model = this;
        
        let constraints:ConstraintMap = model.constructor["constraints"];
        
        for (let key in constraints) {
            
            let fieldConstraints:ValidatorFn[] = constraints[key];
            let value:any = model[key];
            let fieldControl = this.buildFormControl(value,fieldConstraints);
            
            if (fieldControl.invalid) {
                model.errors[key] = fieldControl.errors;
            } else {
                delete model.errors[key];
            }
        }
        
        return !this.hasErrors(false);
    }
    
    private buildFormControl(value:any,fieldConstraints:ValidatorFn[]):FormControl {
                
        let control:FormControl = new FormControl('',fieldConstraints);
        control.setValue(value);
        
        return control;
        
    }


	
}