import { ElementRef, OnInit, Inject } from '@angular/core';

export class DomUtils {
    
    public static unwrapElement(elementRef:ElementRef) {
        let nativeElement: HTMLElement = elementRef.nativeElement,
            parentElement: HTMLElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            
            if (parentElement != null) {
                parentElement.insertBefore(nativeElement.firstChild, nativeElement);
            }

        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);    
    }
        
}