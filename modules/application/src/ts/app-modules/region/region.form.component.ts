import { Component, OnInit } from '@angular/core';
import { TemplateResolver, Notifier, AlertManager, SpinnerService } from '../../../../bong.core';

import { Region } from '../../models/region';
import { RegionService } from '../../services/index';
import { Router } from '@angular/router';

import { Validators } from '@angular/forms';

@Component({
	templateUrl: TemplateResolver.resolve(RegionFormComponent,'region')
})
export class RegionFormComponent implements OnInit {

	private region:Region = new Region();

	constructor(
		private router: Router,
		private regionService:RegionService,
		private alertManager:AlertManager,
		private notifier:Notifier,
		private spinnerService:SpinnerService
	) {}
	
	ngOnInit() {
		
	}

	save() {
	
		let isValid = this.region.validate();
		
		console.log(isValid);
		console.log(this.region.errors);
		
		
		
		// this.alertManager.confirmInfo("Are you sure you want to create this region?")
		// 		.confirm(()=>{

		// 			this.spinnerService.start();

		// 			this.regionService.createRegion(this.region)
		// 				.subscribe((response) => {

		// 					this.spinnerService.stop();
						
		// 					this.notifier.success(`Region ${response.name} created`);
		// 					this.router.navigate([`/region/${response.id}`]);
		// 				});
		// 		});

		

	}

}