import { Component,Inject, OnInit } from '@angular/core';
import { TemplateResolver } from '@bong/core';
import { LookupService } from '../services/lookup.service';
import { MockCreateComponent } from './mock.create.component';

@Component({
    selector: 'forms-ctrl',
    templateUrl: TemplateResolver.resolve(FormsComponent,'app'),
    providers: [ LookupService ]
})
export class FormsComponent {
    dataModel: string = '';
    
    private detailCreateComponent = MockCreateComponent;
    
    constructor(@Inject(LookupService) private lookupService) {
        
    }
    

}