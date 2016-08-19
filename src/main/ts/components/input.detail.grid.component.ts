import { Component, ViewChild,ElementRef, Inject, Type,Input,OnInit } from '@angular/core';
import { InputComponent } from './input.component';
import { DivRowComponent } from './div.row.component';
import { DivColComponent } from './div.col.component';
import { InputCheckboxComponent } from './input.checkbox.component';
import { CommandButtonComponent } from './command.button.component';
import { SubmitButtonComponent } from './submit.button.component';
import { ModalComponent } from './modal.component';
import { FormElementComponent } from './form.element.component';
import { InputCurrencyComponent } from './input.currency.component';
import { InputLookupComponent } from './input.lookup.component';
import { ContainerComponent } from './container.component';
import { ArrayUtils } from '../core/array.utils';

@Component({
    selector: 'input-detail-grid',
    template: `
        <div-row>
            <div-col>
                <div-row>
                    <div-col>
                        <command-button
                            icon="fa fa-plus-circle"
                            label="Add Item"
                            size="sm"
                            brand="success"
                            (click)="showNewItemModal($event)"
                        ></command-button>
                        <command-button
                            icon="fa fa-minus-circle"
                            label="Remove Items"
                            size="sm"
                            brand="danger"
                            [disabled]="getSelectedItemCount() == 0"
                            (click)="removeSelectedItems($event);"
                        ></command-button>
                    </div-col>
                </div-row>
                <div-row>
                    <div-col>
                         <br/>
                         <div class="well well-sm" *ngIf="value.length == 0">
                                No Items Added
                         </div>
                            
                         <table class="detail-grid table table-striped table-condensed" *ngIf="value.length > 0">
                            <thead>
                                <tr>
                                    <th class="chk-col">
                                        <input type="checkbox" 
                                               [(ngModel)]="selectAll" (ngModelChange)="toggleAll($event);"/></th>
                                    <th>Ammount</th>
                                    <th>Manager</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let item of value; let i = index">
                                    <td class="chk-col"><input type="checkbox" [(ngModel)]="item.selected"/></td>
                                    <td>{{ item.ammount }}</td>
                                    <td>{{ item.manager }}</td>
                                </tr>
                            </tbody>
                         </table>
                       
                         
                    </div-col>
                </div-row>
                <modal icon="fa fa-plus-circle" title="Add New Item" #itemModal>
                    <container [component]="createComponent"></container>
                    <modal-footer>
                        <submit-button 
                            brand="primary"
                            label="Submit"
                            (click)=addDetailItem($event);
                        >
                        </submit-button>
                    </modal-footer>
                </modal>
            </div-col>
        </div-row>
    `,
    directives: [
        DivRowComponent,
        DivColComponent,
        CommandButtonComponent,
        SubmitButtonComponent,
        ModalComponent,
        FormElementComponent,
        ContainerComponent,
        InputCheckboxComponent
    ],
    styles: [
        '.detail-grid { border: 1px solid #aaa; }',
        '.detail-grid { margin-bottom: 0 !important; }',
        `.detail-grid thead tr th {
               background: #ffffff;
background: -moz-linear-gradient(top,  #ffffff 0%, #f1f1f1 50%, #e1e1e1 51%, #f6f6f6 100%);
background: -webkit-linear-gradient(top,  #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);
background: linear-gradient(to bottom,  #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0 );

               border-bottom: 1px solid #aaa;
        }`,
        '.detail-grid .chk-col { width: 35px; text-align:center; border-right: 1px solid #aaa;  }'
    ]
})
export class InputDetailGridComponent extends InputComponent implements OnInit {
    
    @ViewChild("itemModal")
    itemModal:ModalComponent;
    
    @Input()
    createComponent:any;
    
    private selectAll:boolean = false;
    
    constructor(@Inject(ElementRef) elementRef) {
         super(elementRef);
    }

    ngOnInit() {
        if (this.value == null) {
            this.value = [];
        }
    }
    
    showNewItemModal($event) {
        this.itemModal.show();
    }
    
    toggleAll($event) {
        
        ArrayUtils.
            withFilter(this.value,() => true)
            .doWithItem((item) => {
                item.selected = this.selectAll;
            });
        
    }
    
    addDetailItem($event) {
        this.value.push({ammount:"$ 100.00",manager:"Humberto Guerrero"});
        this.itemModal.hide();
    }
    
    removeSelectedItems($event) {
        
        ArrayUtils
            .withFilter(this.value,(item) => item.selected === true)
            .removeAll();
        
    }
    
    getSelectedItemCount():number {
        return ArrayUtils.findAll(this.value,(item) => item.selected === true).length;
    }
    
}