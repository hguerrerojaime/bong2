import { Component, Input } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
    selector:'submit-button',
    template:`
        <button type="submit" 
                class="btn btn-{{brand}} btn-{{size}}"
                [class.btn-block]="blockWidth"
                [disabled]="disabled"
                (click)="doClick($event)"
        >
            <i class="{{ icon }}" *ngIf="icon"></i> {{ label }}
        </button>
    `    
})
export class SubmitButtonComponent extends ButtonComponent {
  
}