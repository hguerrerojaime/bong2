import { 
    Component,
    ComponentRef,
    Compiler,
    OnInit,
    Input,
    ViewChild,
    ViewContainerRef,
    Inject,
    Type,
    ReflectiveInjector,
    ComponentFactoryResolver,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { InlineLoaderComponent } from './inline.loader.component';
import { ClassLoader } from '../core/class.loader';

@Component({
    selector: 'container',
    template: `
        <div #wrapper>
            <div class="loader-wrapper">
                <inline-loader *ngIf="loading"></inline-loader>
            </div>
        </div>
        `,
    styles: [ '.loader-wrapper { text-align:center; }' ]
})
export class ContainerComponent {
    
    @Input()
    component:any;
    
    @ViewChild('wrapper', {read: ViewContainerRef})
    wrapper:ViewContainerRef;
    
    cmpRef:ComponentRef<any>;
    
    private loading:boolean = true;
    
    private __component;
    
    constructor(@Inject(ComponentFactoryResolver) private resolver:ComponentFactoryResolver) {}

    refresh() {

        this.loading = true;
        
        if(this.cmpRef) {
            this.cmpRef.destroy();
        }
        
        if (this.component == null) {
            throw new EvalError("A component must be specified!");
        }
        
        let factory = this.resolver.resolveComponentFactory(this.component);
        this.cmpRef = this.wrapper.createComponent(factory)
        this.loading = false;
    }
    
    get componentInstance() {
        return this.cmpRef.instance;
    }
   
    
}