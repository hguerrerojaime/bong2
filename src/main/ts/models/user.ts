import { TDate, TCurrency, TLookup } from '../types/index';
import { TModel } from '../types/index';

export class User extends TModel {

    public key:string = "U33595";
    public name:string = "user";
    public wage:TCurrency = new TCurrency();
    public hireDate:TDate = TDate.TODAY;
    public skills:string[] = ["Java","PHP"];
    public manager:TLookup<string> = null;
    
    constructor(object:Object = {}) {
    	super(object);
    }
    
    public json():Object {
    	return {
            key: this.key,
    		name: this.name,
    		wage: this.wage.json(),
    		hireDate: this.hireDate.json(),
            manager: this.manager == null ? null : this.manager.json(),
    		skills: this.skills
    	};
    }
    
}