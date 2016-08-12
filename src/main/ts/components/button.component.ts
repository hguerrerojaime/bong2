import { Input } from '@angular/core';
import { BaseComponent } from './base.component';

export class ButtonComponent extends BaseComponent {
    
    @Input()
    brand:string = "default";
    
    @Input()
    icon:string;
    
    @Input()
    label:string = "Button";
    
    @Input()
    size:string = "md";
    
    @Input()
    blockWidth:boolean = false;

}