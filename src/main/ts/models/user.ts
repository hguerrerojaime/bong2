import { TDate, TCurrency } from '../types/index';

import { TModel } from '../types/index';

export class User extends TModel {
    
    constructor(
       public name:string = "user",
       public wage:TCurrency = new TCurrency(),
       public hireDate:TDate = TDate.TODAY,
       public skills:string[] = ["Java","PHP"],
       public manager:any = null
    ) {
    	super();
    }
    
    public json():Object {
    	return {
    		name: this.name,
    		wage: this.wage.json(),
    		hireDate: this.hireDate.json(),
        manager:this.manager,
    		skills: this.skills
    	};
    }
    
}