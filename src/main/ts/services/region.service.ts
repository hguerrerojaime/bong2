import { Injectable } from '@angular/core';
import { RestClient } from './rest.client';

import { Http } from '@angular/http';
import { Notifier } from '../core/index';

import { Observable } from 'rxjs/Observable';
import { Region } from '../models/region';



@Injectable()
export class RegionService extends RestClient {

	constructor(http:Http,notifier:Notifier) {
      super(http,notifier);
    }

    createRegion(region:Region):Observable<any> {
    	return this.http.post("http://localhost:8080/api/builder/region.json",region.json())
    				.map(res => res.json())
    				.catch(this.handleError)

    }

    getRegion(id:string):Observable<Region> {

        console.log(id);

    	return this.http.get(`http://localhost:8080/api/builder/region/${id}.json`)
    				.map(res =>  new Region(res.json()))
    				.catch(this.handleError);

    }

    

}