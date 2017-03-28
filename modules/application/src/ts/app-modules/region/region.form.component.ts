import { Component, OnInit,Input } from '@angular/core';
import { 
	TemplateResolver,
	Notifier,
	AlertManager,
	SpinnerService

} from '../../../../bong.core';

import { Region } from '../../models/region';
import { RegionService } from '../../services/index';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
	selector:'region-form',
	templateUrl: TemplateResolver.resolve(RegionFormComponent,'region')
})
export class RegionFormComponent {

	@Input()
	value:Region;
	
	
}