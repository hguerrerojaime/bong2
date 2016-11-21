import { Component, OnInit } from '@angular/core';
import { TemplateResolver, Notifier, AlertManager, SpinnerService } from '../../core/index';

import { Region } from '../../models/region';
import { RegionService } from '../../services';
import { Router } from '@angular/router';

import { Validators } from '@angular/forms';

@Component({
	templateUrl: TemplateResolver.resolve(RegionFormComponent,'app/region')
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
		
		console.log(this.region);
		
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