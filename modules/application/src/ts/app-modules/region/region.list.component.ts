import { Component, OnInit } from '@angular/core';

import { TemplateResolver } from '../../../../bong.core';

import { RegionService } from '../../services/index';
import { Region } from '../../models/region';

@Component({
	templateUrl: TemplateResolver.resolve(RegionListComponent,'region')
})
export class RegionListComponent implements OnInit {

	data:Region[] = [];

	constructor(private service:RegionService) {}

	ngOnInit() {

		this.service.listRegions()
			.subscribe(regionList => this.data = regionList);

	}

}