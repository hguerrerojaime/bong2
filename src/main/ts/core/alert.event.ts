export class AlertEvent {
    
    constructor(private _actions:any = {}) {}
    
    public get actions():any {
        return this._actions;
    }
    
}