import { TModel } from '../types/index';

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