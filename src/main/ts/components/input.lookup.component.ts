import { Component, ViewChild, Input, Output, OnInit, Inject, EventEmitter } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ModalComponent } from './modal.component';
import { DivRowComponent } from './div.row.component';
import { DivColComponent } from './div.col.component';
import { OutputComponent } from './output.component';
import { InputTextComponent } from './input.text.component';
import { LookupGridComponent } from './lookup.grid.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KeyCombinationDirective } from '../directives/key.combination.directive';

declare var jQuery:any;

@Component({
    selector: 'input-lookup',
    template: `
       <div-row>
            <div class="col-sm-{{inputWidth}} nopadding">
               <div class="input-group has-{{ brand }} has-feedback">
                    <input-text #keyText
                                [(ngModel)]="value"
                                key-combination
                                keyCode="40"
                                (kcMatch)="lookupBtnClick($event)"
                    ></input-text>
                    <span *ngIf="icons[brand]" class="glyphicon glyphicon-{{ icons[brand] }} form-control-feedback"></span>
                    <span class="input-group-btn data-up">
                        <button type="button" class="btn btn-default" (click)="lookupBtnClick($event)" ><i class="fa fa-search"></i></button>
                    </span>
               </div>
            </div>
            <div class="col-sm-{{12 - inputWidth}} lookup-label-wrapper">
                <span class="form-control lookup-label truncate" title="{{ valueTitle }}"><output #lookupOutput></output></span>
            </div>
       </div-row>
       <modal title="Lookup Managers" #lookupModal>
           <lookup-grid #lookupGrid (onSelectedItem)="setSelectedItem($event)"></lookup-grid>
       </modal>
    `,
    styles: [
        '.input-group .form-control-feedback { margin-right: 24px; }',
        '.lookup-label-wrapper { padding-left: 1 !important; margin-left: 0 !important; }',
        '.lookup-label { font-weight:bold; background-color: #eee; }'
    ],
    directives: [
        ModalComponent,
        DivRowComponent,
        DivColComponent,
        OutputComponent,
        LookupGridComponent,
        InputTextComponent,
        KeyCombinationDirective
    ]
})
export class InputLookupComponent extends InputJqueryComponent {
        
    @ViewChild("lookupModal")
    lookupModal: ModalComponent;
    
    @ViewChild("lookupOutput")
    lookupOutput: OutputComponent;
    
    @ViewChild("lookupGrid")
    lookupGrid: LookupGridComponent;
    
    @ViewChild("keyText")
    keyText: InputTextComponent;
    
    @Input()
    inputWidth:number = 6;
    
    @Input()
    fnItemsLoader:Function;

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
    
    lookupBtnClick($event) {

       if (this.fnItemsLoader == null) {
           throw new EvalError("The item loader must not be null!");
       }
       
       this.lookupGrid.loadValues(this.fnItemsLoader());
       this.lookupModal.show();
       this.lookupGrid.txtSearch.requestFocus();
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
        
       

    }
    
    setSelectedItem(item) {
        this.lookupModal.hide();
        this.brand = "success";
        this.value = item.key;
        this.valueTitle = item.value;
        this.lookupOutput.value = item.value;
        this.keyText.requestFocus(true);
    }
    

}