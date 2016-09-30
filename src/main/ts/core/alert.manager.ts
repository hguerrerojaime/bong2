import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertComponent } from '../components/alert.component';
import { MessageEvent } from './message.event';
import { ConfirmEvent } from './confirm.event';

@Injectable()
export class AlertManager {
    
    private __alert : AlertComponent;
    
    set alert(__alert:AlertComponent) {
        this.__alert = __alert;
    }
    
    get alert() {
        return this.__alert;
    }
    
    messageInfo(message:string):void {
        this.showMessage("Info",message,"fam fam-information");
    }
    
    messageWarning(message:string):void {
        this.showMessage("Warning",message,"fam fam-error");
    }
    
    messageError(message:string):void {
        this.showMessage("Error",message,"fam fam-cancel");
    }

    confirmInfo(message:string):ConfirmEvent {
        return this.showConfirm("Info",message,"fam fam-information");
    }
    
    confirmWarning(message:string):ConfirmEvent {
        return this.showConfirm("Warning",message,"fam fam-error");
    }
    
    private showConfirm(title:string,message:string,icon:string):ConfirmEvent {
        this.alert.initialize();
        let event = new ConfirmEvent();
        this.alert.alertEvent = event;
        
        this.show(title,message,icon);
        return event;
    }
    
    private showMessage(title:string,message:string,icon:string):MessageEvent {
        this.alert.initialize();
        let event = new MessageEvent();
        this.alert.alertEvent = event;
        this.show(title,message,icon);
        return event;
    }
     
    private show(title:string,message:string,icon:string):void {
        this.alert.title = title;
        this.alert.message = message;
        this.alert.icon = icon;
        this.alert.show();
    }

}