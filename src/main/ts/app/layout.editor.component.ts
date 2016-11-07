import { Component, ElementRef, ViewChild } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
	selector:'layout-editor',
	template: `

		 
		    <panel title="Layout Editor">
		   	   <div-row>
		    		<div-col>
		    			<command-button label="Save" (click)="save()"></command-button>
		    		</div-col>
		    	</div-row>
		    	
		    	<div-row>
		    		<div-col width="6">
		    			<div class="row draggable wrapper">
		    				<div class="col-md-4 container" [dragula]='"fields-bag"'>
						        <div>UID</div>
						        <div>Name</div>
						        <div>Manager</div>
				    		</div>
		    				<div class="col-md-4 container" [dragula]='"static-bag"'>
						        <div>Space</div>
						        <div>Label</div>
				    		</div>
				    		<div class="col-md-4 container" >
							    <div [dragula]="'section-bag'" [dragulaModel]="[sectionElement]">
							    	<div class="drag-handle">Section</div>
							    </div>
							    <div [dragula]='"section-col-bag"' [dragulaModel]="[columnElement]">
							    	<div>Section Column</div>
							    </div>
				    		</div>
				    	</div>
		    		</div-col>
		    	</div-row>
		    	<div-row>
		    		<div #layoutSectionBag class="col-md-12" [dragula]="'section-bag'" [dragulaModel]="layout">
		    			<div *ngFor='let section of layout'>
		    				<div class="drag-handle" > {{ section.name }}  </div>
		    				<div class="row" [dragula]="'section-col-bag'" [dragulaModel]="section.columns"> 
		    					<div *ngFor="let col of section.columns; let i = index" class="col-md-{{ 12 / section.columns.length }}">
		    						Column
		    					</div>
		    				</div>
		    			</div>
		    		</div>
		    	</div-row>

		    </panel>
		  

	`,
	viewProviders: [ DragulaService ]
})
export class LayoutEditorComponent {

	@ViewChild("layoutSectionBag")
	private layoutSectionBag:ElementRef;

	private sectionElement = { name:"New Section",columns:[ { components:[] } ] };
	private columnElement = { components:[] };


	private layout:Object[] = [
		{ name:"Existing Section",
		  columns:[ 
			{ components:[] },
			{ components:[] }
		  ] 
		}
	];



	constructor(private dragulaService: DragulaService) {


		dragulaService.setOptions('fields-bag', {
	    	accepts: (e, target, source) => {
	    		return source !== target;
	    	} 
	    });
		
	    dragulaService.setOptions('section-bag', {
	    	copy: true,
	    	copySortSource: false,
	    	moves:(e, container, handle) => {
	    		
	    		return handle.className == "drag-handle";
	    	},
	    	accepts: (e, target, source) => {
	    		return source !== this.layoutSectionBag.nativeElement;
	    	}
	    });

	    dragulaService.setOptions('section-col-bag', {
	    	copy: true,
	    	accepts: (e, target, source, model) => {
	    		console.log(target.children);
	    		return target.children.length  <= 3;
	    	}
	    });

	    

	    // dragulaService.drop.subscribe((value) => {
	    //   this.onDrop(value.slice(1));
	    // });
	}

	private onOver(args) {
	    let [el, container, source] = args;
	    if(container.id!=="content")
	      el.remove();
	}
	  
	//(0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
	private onDrop(value) {
		console.log(value[2]);
	    if (value[2] == null) //dragged outside any of the bags
	      return;
	    if (value[2].id !== "content" && value[2].id !== value[3].id) //dragged to a container that should not add the element
	      value[1].remove();
	}

	save() {
		console.log(this.layout);
	}

}