import { Component,Input } from '@angular/core';

//import '../../../prototypes/src/ts/object';

@Component({
    selector: 'error-box',
    template: `
        <div class="alert alert-danger" *ngIf="clientErrorKeys.length > 0">
            <div><strong>{{ title }}</strong><div>
            <ul>
                <li *ngFor="let field of clientErrorKeys">
                    [{{ field }}] - {{ clientErrors[field] }}
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

    constructor() {


       
    }

    private get clientErrorKeys() {
        return Object.keys(this.clientErrors);
    }

}