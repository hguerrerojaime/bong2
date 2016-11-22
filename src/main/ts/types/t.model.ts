import { DataType } from './data.type';
import { ConstraintMap } from '../validation/constraint.map';
import { ErrorMap } from '../validation/error.map';

export abstract class TModel extends DataType<Object,Object> {
	
	private _errors:ErrorMap = {};

	constructor(object:Object = {}) {
		super();

		if (object != null) {
			Object.assign(this,object);
		}

		this.nativeValue = this;
	}
	
	
	public get errors() {
		return this._errors;
	}
		
	public abstract json():Object;
	
	static constraints:ConstraintMap = {};

}