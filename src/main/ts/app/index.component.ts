import {Component} from '@angular/core';
import { fadeIn } from '@bong/core';

@Component({
    selector: 'index',
    template: `
        <div [@openClose]="transitionStatus">
            Welcome
        </div>
    `,
  animations: [
    fadeIn()
  ]
    
})
export class IndexComponent {
 
}