import {Component, OnInit, Inject } from '@angular/core';

import { AlertManager,Notifier } from '@bong/core';

@Component({
    selector: 'index',
    template: `
        <div>
            Welcome
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
                   
            })
            .reject(() => {
                this.alertManager.messageInfo("You clicked no");
                
            })
        ;
    }
 
}