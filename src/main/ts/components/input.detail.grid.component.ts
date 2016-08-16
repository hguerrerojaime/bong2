import { Component, ViewChild,ElementRef, Inject, Type,Input } from '@angular/core';
import { InputComponent } from './input.component';
import { DivRowComponent } from './div.row.component';
import { DivColComponent } from './div.col.component';
import { CommandButtonComponent } from './command.button.component';
import { SubmitButtonComponent } from './submit.button.component';
import { ModalComponent } from './modal.component';
import { FormElementComponent } from './form.element.component';
import { InputCurrencyComponent } from './input.currency.component';
import { InputLookupComponent } from './input.lookup.component';
import { ContainerComponent } from './container.component';
import { LookupService } from '../services/lookup.service';
import { MockCreateComponent } from '../app/mock.create.component';

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
                    </div-col>
                </div-row>
                <div-row>
                    <div-col>
                         <br/>
                         <div class="well well-sm">
                            No Items Added
                         </div>
                    </div-col>
                </div-row>
                <modal icon="fa fa-plus-circle" title="Add New Item" #itemModal>
                    <container [component]="createComponent"></container>
                    <modal-footer>
                        <submit-button 
                            brand="primary"
                            label="Submit"
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
        InputLookupComponent,
        InputCurrencyComponent,
        ContainerComponent
    ],
    providers: [LookupService]
})
export class InputDetailGridComponent extends InputComponent {
    
    @ViewChild("itemModal")
    itemModal:ModalComponent;
    
    constructor(@Inject(ElementRef) elementRef,@Inject(LookupService) private lookupService) {
         super(elementRef);
    }
    
    @Input()
    createComponent:Type;
    
    showNewItemModal($event) {
        this.itemModal.show();
    }
    
    submit($event) {
        this.itemModal.hide();
    }
    
}