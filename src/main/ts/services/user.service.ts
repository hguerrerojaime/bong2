import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Notifier } from '../core/index';
import { User } from '../models/user';
import 'rxjs/Rx';

const URL:string = "http://demo3252269.mockable.io/user";

@Injectable()
export class UserService  {

	constructor(private http: Http,private notifier:Notifier) {}

	save(user:User):Observable<Object> {
		return this.http.post(URL,user.json())
				    .map((response) => response.json())
				    .catch((response) => { 
				    	this.notifier.error("Could not save user");
				    	return Observable.throw("Could not save user"); 
				    });
	}

}