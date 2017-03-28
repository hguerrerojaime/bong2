import { Validators } from '@angular/forms';

import { ConstraintMap, VModel } from '../../../bong.validation';

export class Region extends VModel {

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
        name: [Validators.required,Validators.pattern("[A-Z]{1}[A-Z0-9]*"),Validators.maxLength(5)]
    };
}

        