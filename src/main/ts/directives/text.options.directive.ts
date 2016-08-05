import { Directive,HostListener,ElementRef,OnInit, Input, Inject } from '@angular/core';

@Directive({
    selector: "[text-options]"
})
export class TextOptionsDirective implements OnInit {

    @Input()
    textCase:string;
    
    @Input()
    keyup:Function;
    
    constructor(@Inject(ElementRef) public elementRef: ElementRef) {}
    
    ngOnInit() {
         this.initCaseCSS(this.elementRef.nativeElement);
    }
    
    @HostListener('keyup', ['$event.target'])
    onKeyup(inputText) {
        
        if (this.keyup != null) {
            this.keyup(inputText);
        }
        
        if (this.textCase == 'lower') {
            inputText.value = inputText.value.toLowerCase();
        } else if(this.textCase == 'upper') {
            inputText.value = inputText.value.toUpperCase();
        }
    }
    
    private initCaseCSS(inputText) {
        
        if (this.textCase == 'lower') {
            inputText.style['text-transform'] = "lowercase";
        } else if(this.textCase == 'upper') {
            inputText.style['text-transform'] = "uppercase";
        }
        
    }

    
}