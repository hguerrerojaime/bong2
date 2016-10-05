import { Component, Input, OnInit, Inject,ElementRef } from '@angular/core';

@Component({
  selector: 'dt-column',
  template: '<ng-content></ng-content>'
})
export class DatatableColumnComponent implements OnInit {
    
    @Input()
    label:string;
    
    @Input()
    field:string;
    
    @Input()
    it:any = {};
    
    constructor(@Inject(ElementRef) private _body:ElementRef) {}

    ngOnInit() {
        if (this.label == null) {
            this.label = this.field;
        }

    }
    
    get body():ElementRef {
        return this._body;
    }
        
    hasBody():boolean {
        return this.body.nativeElement.children.length > 0;
    }

}