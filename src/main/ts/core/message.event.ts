import { AlertEvent } from './alert.event';

export class MessageEvent extends AlertEvent {
    
    private static OK_LABEL:string = "OK";
    
    constructor() {
        super();
        
        this.actions.close = {
            name: MessageEvent.OK_LABEL,
            handler: () => {},
            brand:"primary"
        };
                
    }
    
    public accept(handler:any,label = MessageEvent.OK_LABEL):any {
        
        this.actions.confirm.name = label;
        this.actions.confirm.handler = handler;
        
        return this;
    }
        
}