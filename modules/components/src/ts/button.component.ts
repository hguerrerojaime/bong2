import { Input,Output,EventEmitter } from '@angular/core';
import { BaseComponent } from './base.component';

export class ButtonComponent extends BaseComponent {
    
    
    @Input()
    brand:string = "default";
    
    @Input()
    icon:string;

    @Input()
    hideLabel:boolean = false;
    
    @Input()
    label:string = "Button";
    
    @Input()
    size:string = "md";
    
    @Input()
    blockWidth:boolean = false;
    
    @Input()
    disabled:boolean = false;
    
    @Output()
    action:EventEmitter<any> = new EventEmitter();
    
    doClick($event) {
        if (!this.disabled) {
            this.action.emit($event);
        }
    }

}