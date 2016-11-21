import { TModel } from '../types/index';

export class Organization extends TModel {

    public id:string;
    public domain:string = "biits.mx";
    
    constructor(object:Object = {}) {
    	super(object);
    }
    
    public json():Object {
    	return {
            domain: this.domain
    	};
    }
    
}