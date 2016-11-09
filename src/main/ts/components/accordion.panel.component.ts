import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { StringUtils, DomUtils } from '../core/index';

@Component({
	selector:'acc-panel',
	template: `
		
		<div class="panel panel-default">
		    <div class="panel-heading panel-heading-sm" role="tab" id="heading-{{id}}">
		      <h5 class="panel-title" style="font-size:1em;">
		        <a role="button" [attr.data-toggle]="'collapse'" [attr.data-parent]="'#'+parent" href="#collapse-{{id}}" [attr.aria-expanded]="'false'" [attr.aria-controls]="'collapse-'+id">
		          {{ title }}
		        </a>
		      </h5>
		    </div>
		    <div id="collapse-{{id}}" class="panel-collapse collapse" role="tabpanel" [attr.aria-labelledby]="'heading-'+id">
		      <div class="panel-body">
		        <ng-content></ng-content>
		      </div>
		    </div>
		</div>
		
	`
	
})
export class AccordionPanelComponent implements OnInit {

	parent:string;
	private id:string = StringUtils.random();

	@Input()
	title:string;

	constructor(private elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

	ngOnInit() {
		DomUtils.unwrapElement(this.elementRef);
	}

}