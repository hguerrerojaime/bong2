import { Component } from '@angular/core';

import { TemplateResolver } from '../../core/index';

@Component({
	templateUrl: TemplateResolver.resolve(RegionListComponent,'app/region')
})
export class RegionListComponent {

	data:any[] = [
		{ name:"STA1",description:"TEST REGION" },
		{ name:"SZA1",description:"QA REGION" },
		{ name:"PILOT",description:"PILOT REGION" },
		{ name:"PROD",description:"PRODUCTION REGION" }
	];

}