import { Component, Input } from '@angular/core';

@Component({
    selector:'link-button',
    template:`
        <a [routerLink]="routerLink" class="btn btn-{{brand}} btn-{{size}}" [class.btn-block]="blockWidth">
            <i class="{{ icon }}" *ngIf="icon"></i> {{ label }}
        </a>
    `    
})
export class LinkButtonComponent {

	@Input()
	routerLink:string;

	@Input()
    brand:string = "default";
    
    @Input()
    icon:string;

    @Input()
    hideLabel:boolean = false;
    
    @Input()
    label:string = "Button";
    
    @Input()
    size:string = "md";
    
    @Input()
    blockWidth:boolean = false;
    
    @Input()
    disabled:boolean = false;
 
}