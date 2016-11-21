import { Component } from '@angular/core';

import { TemplateResolver } from '../../core/index';

@Component({
    templateUrl: TemplateResolver.resolve(RegionViewListComponent,'app/region')
})
export class RegionViewListComponent {
    
}
