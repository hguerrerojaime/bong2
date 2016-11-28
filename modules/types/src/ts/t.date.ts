import { Moment, utc } from 'moment/moment';
import { DataType } from './data.type';

export class TDate extends DataType<Moment,string> {

	private static DEFAULT_FORMAT:string = "YYYY-MM-DD";

	private _format:string;

	constructor(date = utc()) {
		super();
		this.nativeValue = utc(date);
		this.format = TDate.DEFAULT_FORMAT;
	}

	public json():string {
		return this.nativeValue.format(this.format);
	}

	set format(_format:string) {
		this._format = _format;
	}

	get format():string {
		return this._format;
	}

	public static get TODAY():TDate {
		return new TDate();
	}

}