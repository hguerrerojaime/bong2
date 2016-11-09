import { Component, ElementRef, ViewChild } from '@angular/core';
import { TemplateResolver } from '../core/index';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
	selector:'layout-editor',
	templateUrl: TemplateResolver.resolve(LayoutEditorComponent,'app'),
	viewProviders: [ DragulaService ],
	styles: [
		'.section-bag h4 { text-align: center; }',
		'.container h5 { padding-left: 5px; }',
		'.drag-target { min-height: 10px; padding: 5px !important; }',
		'.drag-section-bag div { border-left: 5px solid #AEDE81; }',
		'.drag-section-col-bag div { border-left: 5px solid #FFD078; }',
		'.drag-component-bag div { border-left: 5px solid #ABB9E0; }',
		'.drag-section-bag-c { border: 3px dotted #AEDE81; }',
		'.drag-section-col-bag-c { border: 3px dotted #FFD078; }',
		'.drag-component-bag-c { border: 3px dotted #ABB9E0; }'
	]
})
export class LayoutEditorComponent {

	@ViewChild("layoutSectionBag")
	private layoutSectionBag:ElementRef;

	private sectionElement = { title:"New Section",columns:[ { components:[] } ] };
	private columnElement = { components:[] };
	private availableFields = [
		{ label:"UUID" },
		{ label:"Name" },
		{ label:"Manager" },
	];

	private spaceElement = {};


	private layout:any = {
		sections:[]
	};



	constructor(private dragulaService: DragulaService) {


		dragulaService.setOptions('component-bag', {
			moves:(e, container, handle) => {
	    		let canMove = this.hasClasses(handle,["drag-handle"]);
	    		return canMove;
	    	},
			copy: (e, container, handle) => {
	
				return this.hasClasses(e,["drag-static"]);
			},
	    	accepts: (e, target, source) => {
	    		return this.hasClasses(target,["drag-target"]);
	    	} 
	    });
		
	    dragulaService.setOptions('section-bag', {
	    	copy: (e, container, handle) => {
	
				return this.hasClasses(e,["drag-static"]);
			},
	    	copySortSource: false,
	    	moves:(e, container, handle) => {
	    		let canMove = this.hasClasses(handle,["drag-src","drag-handle"]);
	    		return canMove;
	    	},
	    	accepts: (e, target, source) => {
	    		return source !== this.layoutSectionBag.nativeElement;
	    	}
	    });

	    dragulaService.setOptions('section-col-bag', {
	    	copy: (e, container, handle) => {
				return this.hasClasses(e,["drag-static"]);
			},
	    	moves:(e, container, handle) => {
	  			
	    		let canMove = this.hasClasses(handle,["drag-src","drag-handle"]) || 
	    		     (this.hasClasses(handle,["drag-handle"]) && this.hasClasses(handle.parentElement.parentElement.parentElement,["drag-section-col-bag-c"]));
	

	    		return canMove;
	    	},
	    	accepts: (e, target, source, model) => {

	    		let sectionIndex:number =  target.getAttribute("data-sidx");

	    		if (sectionIndex == null) {
	    			return false;
	    		}

	    		let accepts = this.layout["sections"][sectionIndex]["columns"].length  < 4;

	    		return accepts;
	    	}
	    });

	    

	    // dragulaService.drop.subscribe((value) => {
	    //   this.onDrop(value.slice(1));
	    // });
	}

	private hasClasses(element:any,classNames:string[]) {

		for ( let className of classNames ) {

			let hasClass:boolean = element.className.indexOf(className) >=0;

			if (!hasClass) {
				return false;
			}

		}

		return true;
	}

	save() {
		console.log(this.layout);
	}

	editSectionTitle(section) {
		section.editing = true;
	}

	saveSectionTitle(section) {
		delete section.editing;
	}

	removeSection(index) {
		this.layout["sections"].splice(index,1);
	}

	removeColumn(sectIdx,colIdx) {
		this.layout.sections[sectIdx].columns.splice(colIdx,1);
	}

	removeComponent(sectIdx,colIdx,cmpIdx) {
		this.layout.sections[sectIdx].columns[colIdx].components.splice(cmpIdx,1);
	}

}