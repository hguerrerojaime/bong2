import { Component, Inject } from '@angular/core';

import { User } from '../models/user';
import { LookupService } from '../services/lookup.service';
import { UserService } from '../services/user.service';
import { AlertManager,Notifier,SpinnerService, TemplateResolver } from '../core/index';

@Component({
    selector: 'example-form',
    templateUrl: TemplateResolver.resolve(ExampleFormComponent,'app')
})
export class ExampleFormComponent {
    
    user:User = new User();

    constructor(
    	private lookupService:LookupService,
    	private userService:UserService,
    	private alertManager:AlertManager,
    	private spinnerService:SpinnerService,
    	private notifier:Notifier
    ) {

    }
    
    send() {

    	this.alertManager.confirmInfo("Are you sure you want to save the user?")
    		.confirm(()=> {
    			this.spinnerService.start();

		    	this.userService.save(this.user).subscribe((response:any) => {
		    		this.spinnerService.stop();
		    		this.notifier.success(response.msg);

		    	});
    	});

    	

    }

}