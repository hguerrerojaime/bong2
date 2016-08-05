import { Component, Input } from '@angular/core';

@Component({
    selector: 'panel',
    template: `
        <div class="panel panel-{{ brand }} shadow">
            <div class="panel-heading">
                <h4 class="panel-title">{{ title }}</h4>
            </div>
            <div class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class PanelComponent {
        
    @Input()
    brand:string = "default";
    
    @Input()
    title:string = "My Panel";
    
}