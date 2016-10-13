import { Directive,HostListener, Input, Output, EventEmitter } from '@angular/core';

enum KeyModifier {
    CTRL = "ctrlKey",
    SHIFT = "shiftKey",
    ALT = "altKey"
}

@Directive({
    selector: "[key-combination]"
})
export class KeyCombinationDirective {

    @Input()
    keyModifier:KeyModifier = KeyModifier.CTRL;
    
    @Input()
    keyCode:number;
    
    @Output()
    kcMatch:EventEmitter = new EventEmitter();
    

    @HostListener('keydown', ['$event'])
    onKeyDown($event) {
        
        if ($event[this.keyModifier] && $event.keyCode == this.keyCode) {
            this.kcMatch.emit($event);
        }

    }


    
}