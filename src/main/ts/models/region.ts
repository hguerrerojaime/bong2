import { TModel } from '../types/index';

import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { ConstraintMap } from '../validation/constraint.map';

export class Region extends TModel {

    public id:string;
    public name:string;
    public description:string;
    
    constructor(object:Object = {}) {
    	super(object);
    }
    
    public json():Object {
    	return {
            name: this.name,
            description: this.description
    	};
    }
    
    static constraints:ConstraintMap = {
        name: [Validators.required,Validators.maxLength(5)],
        description: [Validators.maxLength(5)]
    };
}