import { 
    Injectable,
    Inject,
    ComponentRef,
    ElementRef,
    ApplicationRef,
    ComponentFactoryResolver,
    Injector,
    ViewContainerRef
} from '@angular/core';

import { SpinnerComponent } from '../components/spinner.component';

@Injectable()
export class SpinnerService {
    
    private spinnerComp: ComponentRef<SpinnerComponent>;
    
    constructor(
        @Inject(ApplicationRef) private appRef: ApplicationRef,
        @Inject(ComponentFactoryResolver) private resolver:ComponentFactoryResolver,
        @Inject(Injector) private injector:Injector
    ) {
        console.log(this.appRef);
    }
    
    public start() {
        let elementRef: ElementRef = this.appRef['_rootComponents'][0].location;
        
    
        
        let factory = this.resolver.resolveComponentFactory(SpinnerComponent);
        
        let node = document.createElement("div");
        let spinner = document.getElementsByTagName("BODY")[0].appendChild(node);
        this.spinnerComp = factory.create(this.injector,null,spinner);
               
    }
    
    public stop() {
        if (this.spinnerComp) {
            this.spinnerComp.destroy();
        }
    }
    
    
}