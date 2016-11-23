import { 
    Component, 
    ViewChild,
    ContentChild,
    ContentChildren,
    ElementRef,
    Inject,
    Type,
    Input,
    OnInit,
    QueryList,
    forwardRef
} from '@angular/core';

import {
    DivRowComponent,
    DivColComponent,
    CommandButtonComponent,
    ModalComponent,
    ContainerComponent
} from '../../../components/index';

import { array as arrayProto } from '../../../prototypes/index';

import { InputComponent } from './input.component';
import { SubmitButtonComponent } from './submit.button.component';

import { FormElementComponent } from './form.element.component';


import { InputDetailGridColumnComponent } from './input.detail.grid.column.component';

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
                            (click)="showNewItemModal($event)"
                        ></command-button>
                        <command-button
                            icon="fa fa-minus-circle"
                            label="Remove Items"
                            size="sm"
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
                            
                         <table class="detail-grid table table-striped table-condensed table-hover" *ngIf="value.length > 0">
                            <thead>
                                <tr>
                                    <th class="chk-col">
                                        <input type="checkbox" 
                                               [(ngModel)]="selectAll" (ngModelChange)="toggleAll($event);"/></th>
                                    <th *ngFor="let col of detailColumns.toArray()">
                                       {{ col.label }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                <tr *ngFor="let item of value; let i = index">
                                   <td class="chk-col"><input type="checkbox" [(ngModel)]="item.selected"/></td>
                                   <td *ngFor="let col of detailColumns.toArray()">
                                       {{ item[col.field] }}
                                   </td>
                                </tr>
                            </tbody>
                         </table>
                       
                         
                    </div-col>
                </div-row>
                <modal icon="fam fam-add" title="Add New Item" #itemModal>
                    <container [component]="createComponent" #container></container>
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
    styles: [
        '.detail-grid { border: 1px solid #ccc; }',
        '.detail-grid { margin-bottom: 0 !important; }',
        `.detail-grid thead tr th {
              background: rgb(238,238,238);
background: -moz-linear-gradient(top,  rgba(238,238,238,1) 48%, rgba(226,226,226,1) 100%);
background: -webkit-linear-gradient(top,  rgba(238,238,238,1) 48%,rgba(226,226,226,1) 100%);
background: linear-gradient(to bottom,  rgba(238,238,238,1) 48%,rgba(226,226,226,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#e2e2e2',GradientType=0 );
            border: 1px solid #ccc;
        }`,
        '.detail-grid .chk-col { width: 35px; text-align:center; border-right: 1px solid #ccc;  }'
    ]
})
export class InputDetailGridComponent extends InputComponent<any[]> implements OnInit {
    
    @ViewChild("itemModal")
    itemModal:ModalComponent;
    
    @ViewChild("container")
    container:ContainerComponent;
    
    @ContentChildren(forwardRef(() =>InputDetailGridColumnComponent))
    detailColumns: QueryList<InputDetailGridColumnComponent>;
    
    @Input()
    createComponent:any;
    
    private selectAll:boolean = false;
    
    constructor(elementRef:ElementRef) {
         super(elementRef);
    }

    ngOnInit() {
        if (this.value == null) {
            this.value = [];
        }
        
        
    }
    
    showNewItemModal($event) {
        this.container.refresh();
        this.itemModal.show();
    }
    
    toggleAll($event) {
        
        this.value.map((item) => {
            item.selected = this.selectAll;
        });
        
    }
    
    addDetailItem($event) {

        this.value.push(this.createComponentInstance.formData);
        this.itemModal.hide();
    }
    
    removeSelectedItems($event) {
        
        this.value
            .find((item) => item.selected === true)
            .removeFrom(this.value);
        
    }
    
    getSelectedItemCount():number {
        return this.value.find((item) => item.selected === true).length;
    }
    
    get createComponentInstance() {
        return this.container.componentInstance;
    }
    
}