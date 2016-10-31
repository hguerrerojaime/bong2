import { Component, ViewChild, Input, Output, OnInit, Inject, EventEmitter, ElementRef } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import { ModalComponent } from './modal.component';
import { DivRowComponent } from './div.row.component';
import { DivColComponent } from './div.col.component';
import { OutputComponent } from './output.component';
import { InputTextComponent } from './input.text.component';
import { LookupGridComponent } from './lookup.grid.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProviderUtils, ArrayUtils } from '../core/index';

declare var jQuery:any;

@Component({
    selector: 'input-lookup',
    template: `
       <div-row colPadding="xs">
            <div class="col-sm-{{inputWidth}}">
               <div class="input-group has-{{ brand }} has-feedback">
                    <input-text #keyText
                                [(ngModel)]="valueKey"
                                key-combination
                                keyCode="40"
                                (kcMatch)="lookupBtnClick($event)"
                                (blur)="lookupByKey()"

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
       <modal title="Lookup Managers" icon="fam fam-magnifier" #lookupModal>
           <lookup-grid #lookupGrid (onSelectedItem)="setSelectedItem($event)"></lookup-grid>
       </modal>
    `,
    styles: [
        '.input-group .form-control-feedback { margin-right: 24px; }',
        '.lookup-label-wrapper { padding-left: 1 !important; margin-left: 0 !important; }',
        '.lookup-label { font-weight:bold; background-color: #eee; }'
    ],
    providers: [ ProviderUtils.createAccessorProvider(InputLookupComponent) ]
})
export class InputLookupComponent extends InputJqueryComponent<any> {
        
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
    lookupService:any;

    valueTitle:string;
    valueKey:string;

    tmpValueKey:string;
        
    icons:any = {
        success: "ok",
        warning: "warning-sign",
        error: "remove"
    };
    
    brand:string = "default";

    constructor(elementRef:ElementRef) {
        super(elementRef);
    }
    
    buildJQueryPlugin(jqElement) {
        jqElement.tooltip();
    }
    
    lookupBtnClick($event) {

       if (this.lookupService == null) {
           throw new EvalError("The lookup service must not be null!");
       }
       
       this.lookupGrid.loadValue(this.lookupService["lookupAll"]());
       this.lookupModal.show();
       this.lookupGrid.txtSearch.requestFocus();
    }
    
    lookupByKey() {

        if (this.keyHasChanged()) {

            this.lookupOutput.loading = true;

            this.lookupService.lookupByKey(this.valueKey).subscribe((result)=>{

                if (this.valueKey) {
                    let foundItem = ArrayUtils.find(result,(item) => {
                        return item.key == this.valueKey;
                    });

                    if (foundItem) {
                        this.brand = "success";
                        this.value = foundItem.id;
                        this.valueKey = foundItem.key;
                        this.valueTitle = foundItem.value;
                        this.lookupOutput.value = foundItem.value;
                    } else {
                        this.brand = "error";
                        this.value = null;
                        this.valueTitle = "Invalid Key";
                        this.lookupOutput.value = "Invalid Key";
                    }
                }

                this.tmpValueKey = this.valueKey;
                this.lookupOutput.loading = false;

            });
        
        }

    }
    
    setSelectedItem(item) {
        this.lookupModal.hide();
        this.brand = "success";
        this.value = item.id;
        this.valueKey = item.key;
        this.tmpValueKey = item.key;
        this.valueTitle = item.value;
        this.lookupOutput.value = item.value;
        this.keyText.requestFocus(true);
    }

    keyHasChanged():boolean {
        return this.valueKey != this.tmpValueKey;
    }
    

}