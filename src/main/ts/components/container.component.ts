import { Component,ComponentResolver,OnInit,Input,ViewChild,ViewContainerRef,Inject,Type } from '@angular/core';
import { InlineLoaderComponent } from './inline.loader.component';
import { ClassLoader } from '../core/class.loader';

import { MockCreateComponent } from '../app/mock.create.component';

@Component({
    selector: 'container',
    template: `
        <div #wrapper>
            <div class="loader-wrapper">
                <inline-loader *ngIf="loading"></inline-loader>
            </div>
        </div>
        `,
    directives: [InlineLoaderComponent],
    styles: [ '.loader-wrapper { text-align:center; }' ]
})
export class ContainerComponent {
    
    @Input()
    component:any;
    
    @ViewChild('wrapper', {read: ViewContainerRef})
    wrapper:ViewContainerRef;
    
    private loading:boolean = true;
    
    private __component;

    refresh() {
        this.loading = true;
        
        if (this.component == null) {
            throw new EvalError("A component must be specified!");
        }
        

        this.resolver.resolveComponent(this.component).then(factory => {
             this.wrapper.clear();
             this.__component = this.wrapper.createComponent(factory);
             this.loading = false;
        });
    
    }
    
    get componentInstance() {
        return this.__component.instance;
    }
    
}