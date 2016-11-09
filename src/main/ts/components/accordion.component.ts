import { Component, ContentChildren, QueryList,forwardRef,OnInit } from '@angular/core';
import { AccordionPanelComponent } from './accordion.panel.component';
import { StringUtils } from '../core/index';

@Component({
	selector:'accordion',
	template: `
		<div class="panel-group draggable wrapper" id="{{id}}" role="tablist" aria-multiselectable="false">
			<ng-content></ng-content>
		</div>
	`
	
})
export class AccordionComponent implements OnInit {

	private id:string = StringUtils.random();

	@ContentChildren(forwardRef(() =>AccordionPanelComponent))
    panels: QueryList<AccordionPanelComponent>;

    ngOnInit() {

    	setTimeout(()=>{

    		this.initPanels();

    	},0);

    }

    private initPanels() {

    	for (let panel of this.panels.toArray()) {
    		panel.parent = this.id;
    	}

    }

}