import { Moment, utc } from 'moment/moment';
import { DataType } from './data.type';

export class TTimestamp extends DataType<Moment,string> {

	constructor() {
		super();
		this.nativeValue = utc();
	}

	public static get NOW():TTimestamp {
		return new TTimestamp();
	}

	public json():string {
		return this.nativeValue.format();
	}

}