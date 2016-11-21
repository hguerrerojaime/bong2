import { Component } from '@angular/core';

import { TemplateResolver } from '../../core/index';

@Component({
	templateUrl: TemplateResolver.resolve(RegionListComponent,'app/region')
})
export class RegionListComponent {

	

}