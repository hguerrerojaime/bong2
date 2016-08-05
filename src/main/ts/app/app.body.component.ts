import { Component,Input } from '@angular/core';
import { BONG_COMPONENTS } from '@bong/components';
import { TemplateResolver } from '@bong/core';

@Component({
    selector: 'app-body',
    templateUrl: TemplateResolver.resolve(AppBodyComponent,'app'),
    directives: [ BONG_COMPONENTS ]
})
export class AppBodyComponent {
    dataModel: string = '';
}