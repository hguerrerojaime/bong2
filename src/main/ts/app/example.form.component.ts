import { Component } from '@angular/core';
import { TemplateResolver } from '../core/index';
import { User } from '../models/user';

@Component({
    selector: 'example-form',
    templateUrl: TemplateResolver.resolve(ExampleFormComponent,'app')
})
export class ExampleFormComponent {
    
    user:User = new User();
    
    send() {
        console.log(this.user);
    }

}