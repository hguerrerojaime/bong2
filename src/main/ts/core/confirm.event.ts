import { AlertEvent } from './alert.event';

export class ConfirmEvent extends AlertEvent {
    
    private static CONFIRM_LABEL:string = "Accept";
    private static REJECT_LABEL:string = "Cancel";
    
    constructor() {
        super();
        
        this.actions.confirm = {
            name: ConfirmEvent.CONFIRM_LABEL,
            handler: () => {},
            brand:"primary"
        };
        
        this.actions.reject = {
            name: ConfirmEvent.REJECT_LABEL,
            handler: () => {},
            brand:"default"
        };
        
    }
    
    public confirm(handler:any,label = ConfirmEvent.CONFIRM_LABEL):any {
        
        this.actions.confirm.name = label;
        this.actions.confirm.handler = handler;
        
        return this;
    }
    
    public reject(handler:any,label = ConfirmEvent.REJECT_LABEL):any {
        
        this.actions.reject.name = label;
        this.actions.reject.handler = handler;
        
        return this;
    }
    
    
}