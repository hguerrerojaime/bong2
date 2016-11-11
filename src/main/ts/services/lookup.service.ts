import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Notifier } from '../core/index';
import 'rxjs/Rx';

const URL:string = "http://localhost:3001/user/lookup";

@Injectable()
export class LookupService  {

    constructor(@Inject(Http) private http: Http,@Inject(Notifier) private notifier:Notifier) {}
    
    
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
    private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.log(this.notifier); 
      return Observable.throw(errMsg);
    }
    
}