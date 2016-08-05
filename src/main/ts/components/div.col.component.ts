import { Component,Input } from '@angular/core';

@Component({
    selector: 'div-col',
    template: `<div [ngClass]="{'nopadding': nopadding}" class="col-{{size}}-{{width}}"><ng-content></ng-content></div>`   
})
export class DivColComponent {
    
    @Input()
    size:string = "md";
    
    @Input()
    width:string = "12";
    
    @Input()
    nopadding:boolean = false;
    
}