import { Component,Inject, OnInit } from '@angular/core';
import { TemplateResolver } from '@bong/core';
import { LookupService } from '../services/lookup.service';

@Component({
    selector: 'forms-ctrl',
    templateUrl: TemplateResolver.resolve(FormsComponent,'app'),
    providers: [ LookupService ]
})
export class FormsComponent {
    dataModel: string = '';
    
    constructor(@Inject(LookupService) private lookupService) {
        
    }
    

}