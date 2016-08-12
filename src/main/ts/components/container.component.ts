import { Component,ComponentResolver,OnInit,Input,ViewChild,ViewContainerRef, Inject } from '@angular/core';
import { InlineLoaderComponent } from './inline.loader.component';
import { ClassLoader } from '../core/class.loader';

import { MockCreateComponent } from '../app/mock.create.component';

@Component({
    selector: 'container',
    template: `
        <div #wrapper>
            <div class="loader-wrapper">
                <inline-loader></inline-loader>
            </div>
        </div>
        `,
    directives: [InlineLoaderComponent],
    styles: [ '.loader-wrapper { text-align:center; }' ]
})
export class ContainerComponent implements OnInit {
    
    @Input()
    component:string;
    
    @ViewChild('wrapper', {read: ViewContainerRef})
    wrapper:ViewContainerRef;
    
    constructor(@Inject(ComponentResolver) private resolver:ComponentResolver){}
    
    
    ngOnInit() {
        
        if (this.component == null) {
            throw new EvalError("A component must be specified!");
        }
        

        this.resolver.resolveComponent(MockCreateComponent).then(factory => {
             this.wrapper.createComponent(factory);
        });
    }
    
}