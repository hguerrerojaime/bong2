import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-detail-grid-column',
  template: '<ng-content></ng-content>'
})
export class InputDetailGridColumnComponent implements OnInit {
    
    @Input()
    label:string;
    
    @Input()
    field:string;

    ngOnInit() {
        
        if (this.label == null) {
            this.label = this.field;
        }
        
    }

}