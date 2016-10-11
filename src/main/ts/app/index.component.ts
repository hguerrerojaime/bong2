import {Component, OnInit, Inject } from '@angular/core';

import { AlertManager,Notifier } from '@bong/core';

@Component({
    selector: 'index',
    template: `
        <div>
           <command-button label="Alert" (click)="alert()"></command-button>
           
           <command-button label="Info" (click)="info()"></command-button>
           
           <command-button label="Warning!" (click)="warning()"></command-button>
           
           <command-button label="Error" (click)="error()"></command-button>
        </div>
    `
})
export class IndexComponent implements OnInit {
    
    
    constructor(
        @Inject(AlertManager) private alertManager:AlertManager,
        @Inject(Notifier) private notifier:Notifier
    ) {}
    
    ngOnInit() {
                
        this.alertManager.confirmWarning("Are you sure?")
            .confirm(() => {
                this.notifier.success("success");
            })
            .reject(() => {
                this.alertManager.messageInfo("You clicked no");
                
            })
        ;
    }
    
    alert() {
        this.notifier.alert("Alert!");
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