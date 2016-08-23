import { EventEmitter,Output } from '@angular/core';

export abstract class SubmitFormComponent {
    
    @Output()
    submit:EventEmitter = new EventEmitter();
    
    get formData():any;

    doSubmit($event) {
        submit.emmit($event);
    }
    
}