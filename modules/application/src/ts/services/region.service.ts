import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Region } from '../models/region';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegionService  {

	constructor(private http:Http) {}

    createRegion(region:Region):Observable<any> {

    	return this.http.post("http://localhost:8080/api/builder/region.json",region.json())
    				.map(res => res.json())
    				.catch(()=> Observable.throw("error"))
        ;

    }

    getRegion(id:string):Observable<Region> {

    	return this.http.get(`http://localhost:8080/api/builder/region/${id}.json`)
    				.map(res =>  new Region(res.json()))
    				.catch(()=> Observable.throw("error"));

    }

    
    listRegions(domain:string = ""):Observable<Region[]> {
        return this.http.get("http://localhost:8080/api/builder/region.json")
                    .map(res => res.json())
                    .catch(()=> Observable.throw("error"))
        ; 
    }
}