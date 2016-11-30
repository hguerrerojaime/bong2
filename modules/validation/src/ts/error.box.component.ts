import { Component,Input } from '@angular/core';
import { MessageSource } from '../../../core/src/ts/message.source';
import { errorMessages } from './error.messages';

//import '../../../prototypes/src/ts/object';

@Component({
    selector: 'error-box',
    template: `
        <div class="alert alert-danger" *ngIf="clientErrorFields.length > 0">
            <div><strong>{{ title }}</strong><div>
            <ul *ngFor="let field of clientErrorFields">
                <li *ngFor="let code of getObjectKeys(clientErrors[field])">
                    {{ message(field,code) }}
                </li>
            </ul>
        </div>
    `
})
export class ErrorBoxComponent {

    @Input()
    title:string = "Errors were found in the form";

    @Input()
    clientErrors:any = {};

    @Input()
    serverErrors:any = {};

    private get clientErrorFields() {
        return Object.keys(this.clientErrors);
    }

    private getObjectKeys(object) {
        return Object.keys(object);
    }

    private getObjectValues(object) {
        let result = [];
        for (let key in object) {
            result.push(object[key]);
        }
        return result;
    }

    private message(field,code):string {
        let error = this.clientErrors[field][code];
        return MessageSource.from(errorMessages)
            .get(code,"invalid value",[field].concat(this.getObjectValues(error)))
        ;
    }



}