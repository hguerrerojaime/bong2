
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Notifier } from '../core/index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class RestClient {

	constructor(private _http:Http,private _notifier:Notifier) {}

	protected get http() {
		return this._http;
	}

	protected get notifier() {
		return this._notifier;
	}

	protected handleError (error: Response | any):Observable<any> {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.log(error); 
      return null;
    }

}