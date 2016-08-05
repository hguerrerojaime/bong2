import { Input } from '@angular/core';

export class ButtonComponent {
    
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