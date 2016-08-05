import { Component, Input } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
    selector:'link-button',
    template:`
        <a class="btn btn-{{brand}} btn-{{size}}" [class.btn-block]="blockWidth">
            <i class="{{ icon }}" *ngIf="icon"></i> {{ label }}
        </a>
    `    
})
export class LinkButtonComponent extends ButtonComponent {
 
}