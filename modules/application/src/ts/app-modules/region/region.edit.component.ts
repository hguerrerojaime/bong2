import { Component, OnInit } from '@angular/core';
import { TemplateResolver, Notifier, AlertManager, SpinnerService } from '../../../../bong.core';

import { Region } from '../../models/region';
import { RegionService } from '../../services/index';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
	templateUrl: TemplateResolver.resolve(RegionEditComponent,'region')
})
export class RegionEditComponent implements OnInit {

	private region:Region = new Region();

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service:RegionService,
		private alertManager:AlertManager,
		private notifier:Notifier,
		private spinnerService:SpinnerService
	) {}
	
	ngOnInit() { 
		this.route.params
			.switchMap((params:Params) => this.service.getRegion(params['id']))
			.subscribe((region:Region) => {
				this.region = region;
		});
	}

	save() {
	
		let isValid = this.region.validate();
		
		if (isValid) {

			this.alertManager.confirmInfo("Are you sure you want to create this region?")
				.confirm(()=>{
					this.spinnerService.start();
					this.service.createRegion(this.region)
						.subscribe((response) => {
							this.spinnerService.stop();
							this.notifier.success(`Region ${response.name} created`);
							this.router.navigate([`/region/${response.id}`]);
						});
			});

		}

		

	}

}