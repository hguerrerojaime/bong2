import { EventEmitter,Output } from '@angular/core';

export abstract class SubmitFormComponent {
    
    @Output()
    submit:EventEmitter<any> = new EventEmitter();
    
    abstract getFormData():any;

    doSubmit($event) {
        this.submit.emit($event);
    }
    
}