import { Component } from '@angular/core';

import { TemplateResolver } from '../../../../bong.core';

@Component({
    templateUrl: TemplateResolver.resolve(RegionViewListComponent,'region')
})
export class RegionViewListComponent {
    
}
