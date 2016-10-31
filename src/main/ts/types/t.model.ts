import { DataType } from './data.type';

export abstract class TModel extends DataType<Object,Object> {

	constructor() {
		super();
		this.nativeValue = this;
	}
	
	public abstract json():Object;


}