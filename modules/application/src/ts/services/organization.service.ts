import { Injectable } from '@angular/core';
import { RestClient } from './rest.client';

import { Http } from '@angular/http';
import { Notifier } from '../core/index';

import { Observable } from 'rxjs/Observable';
import { Region } from '../models/region';



@Injectable()
export class OrganizationService extends RestClient {

	constructor(http:Http,notifier:Notifier) {
      super(http,notifier);
    }

}