import { DataType } from './data.type';

export abstract class TModel extends DataType<Object,Object> {

	constructor(object:Object = null) {
		super();

		if (object != null) {
			Object.assign(this,object);
		}

		this.nativeValue = this;
	}
	
	public abstract json():Object;


}