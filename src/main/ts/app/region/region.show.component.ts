import { Component,OnInit } from '@angular/core';
import { TemplateResolver } from '../../core/index';

import { Region } from '../../models/region';
import { RegionService } from '../../services';

import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
	templateUrl: TemplateResolver.resolve(RegionShowComponent,'app/region')
})
export class RegionShowComponent implements OnInit {

	region:Region;

	constructor(
	  private route: ActivatedRoute,
	  private service: RegionService
	) {}

	ngOnInit() {

		console.log("iniciando");

		this.route.params
			.switchMap((params:Params) => this.service.getRegion(params['id']))
			.subscribe((region:Region) => {
				console.log("encoontro region");
				console.log(region);
				this.region = region;
			});

	}

}