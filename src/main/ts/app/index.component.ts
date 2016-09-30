import {Component, OnInit, Inject } from '@angular/core';

import { AlertManager } from '@bong/core';

@Component({
    selector: 'index',
    template: `
        <div>
            Welcome
        </div>
    `
})
export class IndexComponent implements OnInit {
    
    
    constructor(@Inject(AlertManager) private alertManager:AlertManager) {}
    
    ngOnInit() {
                
        this.alertManager.confirmWarning("Are you sure?")
            .confirm(() => {
                this.alertManager.messageWarning("You clicked yes, no turning back!");
            })
            .reject(() => {
                this.alertManager.messageInfo("You clicked no");
                
            })
        ;
    }
 
}