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
        name: [Validators.required,Validators.maxLength(5)],
        description: [Validators.maxLength(5)]
    };
}

