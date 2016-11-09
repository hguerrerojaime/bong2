import { Component, Input } from '@angular/core';

@Component({
    selector: 'panel',
    template: `
        <div class="panel panel-{{ brand }} shadow {{ mainClass }}" 
                [attr.data-spy]="affix ? 'affix' : null"
                [attr.data-offset-top]="10"
        >
            <div class="panel-heading">
                <h4 class="panel-title">{{ title }}</h4>
            </div>
            <div class="panel-body {{bodyClass}}">
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

    @Input()
    bodyClass:string;

    @Input()
    mainClass:string;

    @Input()
    affix:boolean = false;
    
}