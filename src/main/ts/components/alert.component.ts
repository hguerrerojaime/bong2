import { Component,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { StringUtils } from '../core/string.utils';
import { AlertEvent } from '../core/alert.event';
import { ModalComponent } from './modal.component';

@Component({
    selector:'alert',
    template:`
        <modal [title]="title" [icon]="icon" #modal>
             {{message}}
             
             <modal-footer>
                <command-button 
                    *ngFor="let key of actionKeys" 
                    [brand]="alertEvent.actions[key].brand"
                    [label]="alertEvent.actions[key].name"
                    (click)="actionClick(alertEvent.actions[key])"
                >
            
                </command-button>
             </modal-footer>
        </modal>
    `
})
export class AlertComponent {
    

    @Input()
    title:string;
    
    @Input()
    icon:string;
    
    @Input()
    message:string;
    
    @ViewChild("modal")
    modal:ModalComponent;
    
    private _actionKeys:string[] = [];
    
    alertEvent:AlertEvent;
    
    show() {
        this.modal.show();
    }
    
    hide() {
        this.modal.hide();
    }
    
    initialize():void {
        this.title = null;
        this.icon = null;
        this.message = null;
        this.alertEvent = null;
        this._actionKeys = [];
    }
    
    actionClick(action):void {
        this.hide();
        setTimeout(action.handler,0);
    }
    
    get actionKeys():string[] {
        
        if (this.alertEvent) {
            this._actionKeys = Object.keys(this.alertEvent.actions);
        }
        
        return this._actionKeys;
    }
        
}