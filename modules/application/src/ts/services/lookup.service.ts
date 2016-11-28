import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Notifier } from '../core/index';
import { RestClient } from './rest.client';

const URL:string = "http://localhost:3001/user/lookup";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LookupService extends RestClient {

    constructor(http:Http,notifier:Notifier) {
      super(http,notifier);
    }

    
    public lookupAll(view:string = null) : Observable<Object[]> {
        return this.http.get(URL)
                   .map(this.extractData)
                   .catch(this.handleError);
        
    }

    public lookupByKey(key:string) : Observable<Object> {
        return this.http.get(URL+"/"+key)
                   .map(this.extractData)
                   .catch(this.handleError);
        
    }


    private extractData(res: Response) {
      let body = res.json();

      return body;
    }
    
    
}