import { Directive,HostListener, Input, Output, EventEmitter } from '@angular/core';

export class KeyModifier {
    static CTRL="ctrlKey";
    static SHIFT="shiftKey";
    static ALT="altKey";
}

const KEY_MODIFIERS = {};

KEY_MODIFIERS

@Directive({
    selector: "[key-combination]"
})
export class KeyCombinationDirective {

    @Input()
    keyModifier:string = KeyModifier.CTRL;
    
    @Input()
    keyCode:number;
    
    @Output()
    kcMatch:EventEmitter<any> = new EventEmitter();
    

    @HostListener('keydown', ['$event'])
    onKeyDown($event) {
        
        if ($event[this.keyModifier] && $event.keyCode == this.keyCode) {
            this.kcMatch.emit($event);
        }

    }


    
}