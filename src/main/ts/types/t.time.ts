import { Moment, utc } from 'moment/moment';
import { DataType } from './data.type';

export class TTime extends DataType<Moment,string> {

	constructor() {
		super();
		this.nativeValue = utc();
	}

	public static get NOW():TTime {
		return new TTime();
	}

	public json():string {
		return this.nativeValue.format("HH:mm:ss");
	}


}