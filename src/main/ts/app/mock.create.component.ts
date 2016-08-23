import { Component,Inject } from '@angular/core';
import { TemplateResolver } from '@bong/core';
import { LookupService } from '../services/lookup.service';
import { SubmitFormComponent } from '../components/submit.form.component';

@Component({
    selector:'mock-create-ctrl',
    templateUrl: TemplateResolver.resolve(MockCreateComponent,'app'),
    providers: [LookupService]
})
export class MockCreateComponent extends SubmitFormComponent {
    
    mockData:Object = {};
    
    constructor(@Inject(LookupService) private lookupService) {
        super();
    }
    
    get formData():any {
        return this.mockData;
    }
    
}