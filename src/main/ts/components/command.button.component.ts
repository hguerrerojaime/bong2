import { Component, Input } from '@angular/core';

import { ButtonComponent } from './button.component';

@Component({
    selector:'command-button',
    template:`
        <button type="button" class="btn btn-{{brand}} btn-{{size}}" [class.btn-block]="blockWidth">
            <i class="{{ icon }}" *ngIf="icon"></i> {{ label }}
        </button>
    `    
})
export class CommandButtonComponent extends ButtonComponent {
 
}