import { TDate, TCurrency, TLookup } from '../types/index';
import { TModel } from '../types/index';

export class User extends TModel {

    public name:string = "user";
    public wage:TCurrency = new TCurrency();
    public hireDate:TDate = TDate.TODAY;
    public skills:string[] = ["Java","PHP"];
    public manager:TLookup<string> = new TLookup<string>({
         id:"214FD4C6-90F1-18FC-48A1-DFA2A183FC8B",
         key:"U47675",
         value:"Singleton, Rebecca O"
    });
    
    constructor(object:Object = null) {
    	super(object);
    }
    
    public json():Object {
    	return {
    		name: this.name,
    		wage: this.wage.json(),
    		hireDate: this.hireDate.json(),
        manager:this.manager.json(),
    		skills: this.skills
    	};
    }
    
}