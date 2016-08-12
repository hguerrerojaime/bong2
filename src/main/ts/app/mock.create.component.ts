import { Component,Inject } from '@angular/core';
import { TemplateResolver } from '@bong/core';
import { LookupService } from '../services/lookup.service';

@Component({
    selector:'mock-create-ctrl',
    templateUrl: TemplateResolver.resolve(MockCreateComponent,'app'),
    providers: [LookupService]
})
export class MockCreateComponent {
    
    constructor(@Inject(LookupService) private lookupService) {
        
    }
    
}