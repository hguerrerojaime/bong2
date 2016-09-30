export class AlertEvent {
    
    private _actions:any;
    
    constructor() {
        this._actions = {};
    }
    
    public get actions():any {
        return this._actions;
    }
    
}