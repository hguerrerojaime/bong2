import { TModel } from '../types/index';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    
    
}