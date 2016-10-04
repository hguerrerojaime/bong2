export class AlertEvent {
    
    constructor(private _actions:any) {
        this._actions = {};
    }
    
    public get actions():any {
        return this._actions;
    }
    
}