import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ModalComponent } from './modal.component';
import { DivRowComponent } from './div.row.component';
import { DivColComponent } from './div.col.component';
import { AsyncOutputComponent } from './async.output.component';
import { LookupGridComponent } from './lookup.grid.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var jQuery:any;

@Component({
    selector: 'input-lookup',
    template: `
       <div-row>
            <div class="col-sm-{{inputWidth}} nopadding">
               <div class="input-group has-{{ brand }} has-feedback">
                    <input type="text" class="form-control" [ngModel]="model" (blur)="lookupValue()" />
                    
                    <span *ngIf="icons[brand]" class="glyphicon glyphicon-{{ icons[brand] }} form-control-feedback"></span>
                    <span class="input-group-btn data-up">
                        <button type="button" class="btn btn-info" (click)="lookupBtnClick()" ><span class="fa fa-search"></span></button>
                    </span>
               </div>
            </div>
            <div class="col-sm-{{12 - inputWidth}} lookup-label-wrapper">
                <span class="form-control lookup-label truncate" title="{{ valueTitle }}"><async-output #lookupOutput></async-output></span>
            </div>
       </div-row>
       <modal title="Lookup Managers" #lookupModal>
           <lookup-grid #lookupGrid></lookup-grid>
       </modal>
    `,
    styles: [
        '.input-group .form-control-feedback { margin-right: 24px; }',
        '.lookup-label-wrapper { padding-left: 1 !important; margin-left: 0 !important; }',
        '.lookup-label { font-weight:bold; background-color: #eee; }'
    ],
    directives: [ModalComponent,DivRowComponent,DivColComponent,AsyncOutputComponent,LookupGridComponent]
})
export class InputLookupComponent extends InputJqueryComponent implements OnInit {
        
    @ViewChild("lookupModal")
    lookupModal: ModalComponent;
    
    @ViewChild("lookupOutput")
    lookupOutput: AsyncOutputComponent;
    
    @ViewChild("lookupGrid")
    lookupGrid: LookupGridComponent;
    
    @Input()
    inputWidth:number = 6;

    behaviourSubject:BehaviorSubject;
    valueTitle:string;
        
    icons:any = {
        success: "ok",
        warning: "warning-sign",
        error: "remove"
    };
    
    brand:string = "default";
    
    buildJQueryPlugin(jqElement) {
        jqElement.tooltip();
    }
    
    lookupBtnClick() {
       this.lookupGrid.loadValues(new Observable(observer => {
           
           let data = [
             { key: 'ETN', value: 'ENLACES TERRESTRES NACIONALES' },
             { key: 'FA', value: 'FLECHA AMARILLA' },
             { key: 'PP', value: 'PRIMERA PLUS' },
             { key: 'OM', value: 'OMNIBUS DE MEXICO' }
           ];

           observer.next(data);
       }),this.behaviorSubject);
        
       this.lookupModal.show();
       
    }
    
    lookupValue() {
        
        let service = new Observable(observer => {
            
            this.brand = "default";
            this.valueTitle = null;
            
            if (this.value == null || this.value === "") {
                 observer.next(null);
            } else {
            
                setTimeout(() => {
                    if (this.value == "ETN") {
                        this.brand = "success";
                        this.valueTitle = "ENLACES TERRESTRES NACIONALES";
                        observer.next(this.valueTitle);  
                    } else {
                        this.brand = "error";
                        observer.next("invalid key"); 
                    }
                    observer.complete();
                }, 1000);
                
            }
                
        });
        
        this.lookupOutput.loadValue(this.value);

    }
    
    ngOnInit() {
        this.behaviourSubject = new BehaviorSubject(this.value);
        
        this.behaviourSubject.subscribe((result) => {
            this.value = result;
        });
    }
    

}