import { Component } from '@angular/core';

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
				    		<div class="col-md-4 container" [dragula]='"section-bag"' [dragulaModel]="sectionElements">
							    <div *ngFor='let section of sectionElements' [innerHtml]='section.name'></div>
				    		</div>
				    	</div>
		    		</div-col>
		    	</div-row>
		    	<div-row>
		    		<div class="col-md-12 container" [dragula]='"section-bag"' [dragulaModel]="layout">
		    			<div *ngFor='let section of layout'>
		    				<div>{{section.name}} 
		    					<command-button icon="fa fa-edit" label="Edit Title"></command-button>
		    				</div>
		    			</div>
		    		</div>
		    	</div-row>

		    </panel>
		  

	`
})
export class LayoutEditorComponent {

	private sectionElements = [
		{ name:"New Section" }
	];

	private layout:Object[] = [
		{ name:"Existing Section" }

	];

	constructor(private dragulaService: DragulaService) {

		
	    dragulaService.setOptions('section-bag', {
	    	copy: true
	    });

	    // dragulaService.drop.subscribe((value) => {
	    //   this.onDrop(value.slice(1));
	    // });
	}

	private onDrop(args) {
		let [e, el] = args;

	    console.log(e);
	}

	save() {
		console.log(this.layout);
	}

}