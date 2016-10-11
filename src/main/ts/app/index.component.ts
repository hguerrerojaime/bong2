import {Component, OnInit, Inject,ApplicationRef } from '@angular/core';

import { AlertManager,Notifier,SpinnerService } from '../core/index';

@Component({
    selector: 'index',
    template: `
        <panel brand="primary">
           <command-button label="Alert" (click)="alert()"></command-button>
           
           <command-button label="Info" (click)="info()"></command-button>
           <command-button label="Warning!" (click)="warning()"></command-button>
           <command-button label="Error" (click)="error()"></command-button>
        </panel>
    `
})
export class IndexComponent implements OnInit {
    
    
    constructor(
        @Inject(AlertManager) private alertManager:AlertManager,
        @Inject(Notifier) private notifier:Notifier,
        @Inject(SpinnerService) private spinner:SpinnerService
    ) {
        
    }
    
    ngOnInit() {
                
        this.alertManager.confirmWarning("Are you sure?")
            .confirm(() => {
                this.notifier.alert("Confirmed");
            })
        ;
    }
    
    alert() {
        
        this.spinner.start();
        
        setTimeout(()=>{
            this.spinner.stop();
            this.notifier.success("Record Saved Successfully");
            
        },1000);
        
        
        
        
        
    }
    
    info() {
        this.notifier.info("Info message");
    }
    
    warning() {
        this.notifier.warn("This is a warning");
    }
    
    error() {
        this.notifier.error("Something went wrong");
    }
 
}