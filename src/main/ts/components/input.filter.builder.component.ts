import { 
    Component,
    Input,
    forwardRef,
    OnInit,
    ComponentResolver,
    ViewContainerRef,
    ElementRef,
    TemplateRef,
    Inject,
    ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import { InputComponent } from './input.component';
import { DivRowComponent } from './div.row.component';
import { DivColComponent } from './div.col.component';
import { InputTextComponent } from './input.text.component';
import { InputSelectComponent } from './input.select.component';
import { CommandButtonComponent } from './command.button.component';
import { DomUtils } from '../core/dom.utils';


const FB_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFilterBuilderComponent),
    multi: true
};

@Component({
    selector: 'input-filter-builder',
    template: `
        <div class="filter-builder">
            <div-row colPadding="xs" unwrap="true">
                <div-col width="3" unwrap="true">
                    <input-select
                            [options]="filterGroups"
                            size="sm"
                            [(ngModel)]="groupType"
                            
                    ></input-select>
                </div-col>
                
                 <div-col width="9">
                    <div-row colPadding="xs" *ngFor="let filter of value.filters; let i = index;">
                        <div-col width="2" unwrap="true">
                            <div align="center">
                                <command-button icon="fam fam-delete" 
                                                label=""
                                                size="sm"
                                                (action)="removeFilter(i)"
                                                [disabled]="value.filters.length <= 1"
                                ></command-button>
                            </div>
                        </div-col>
                        <div-col width="3" unwrap="true">
                            <input-select [options]="mockFields" 
                                        size="sm"
                                        [(ngModel)]="filter.args[0]"
                                        
                            ></input-select>
                        </div-col>
                        <div-col width="3" unwrap="true">
                            <input-select [options]="filters" 
                                        size="sm" 
                                        [(ngModel)]="filter.key"
                            ></input-select>
                        </div-col>
                        <div-col width="4" unwrap="true">
                            <input-text size="sm" 
                                        [(ngModel)]="filter.args[1]"
                            ></input-text>
                        </div-col>
                    </div-row>
                    <div-row colPadding="xs">
                        <div-col width="2" unwrap="true">
                            <div align="center">
                                <command-button icon="fam fam-add" 
                                                label=""
                                                size="sm"
                                                (action)="addFilter()"
                                ></command-button>
                            </div>
                        </div-col>
                        <div-col width="3" unwrap="true">
                        </div-col>
                        <div-col width="4" unwrap="true">
                        </div-col>
                        <div-col width="4" unwrap="true">
                        </div-col>
                    </div-row>
                </div-col>
               
            </div-row>
         </div>
    `,
    directives: [
        DivRowComponent,
        DivColComponent,
        InputTextComponent,      
        InputSelectComponent,
        CommandButtonComponent
    ],
    providers: [FB_INPUT_CONTROL_VALUE_ACCESSOR],
    styles: [
        '.filter-builder > .row:not(:first-child) { padding-top: 5px; }'
    ]
})
export class InputFilterBuilderComponent extends InputComponent implements OnInit {
  
    @ViewChild('wrapper', {read: ViewContainerRef})
    wrapper:ViewContainerRef;
    
    @ViewChild('filterTemplate', {read: TemplateRef})
    filterTemplate:TemplateRef<any>;
      
    private groupType:string;
    
    private filterGroups:any[] = [
        { key: "and", value: "Match All" },
        { key: "or", value: "Match Any" },
        { key: "nand", value: "Match None" },
    ];
    
    private filters:any[] = [
        { key: "eq", value: "Equals" },
        { key: "ne", value: "Not Equal" },
        { key: "like", value: "Contains" },
    ];
    
    private mockFields:any[] = [
        { key: "name", value: "Name" },
        { key: "lastName", value: "Last Name" },
        { key: "cash", value: "Cash" },
    ];
    
    
    
    constructor(
        @Inject(ElementRef) elementRef:ElementRef,
        @Inject(ComponentResolver) private resolver:ComponentResolver
    ){
        super(elementRef);
        
    }
    
    ngOnInit() {
        this.value = { group: "and", filters: []};
        this.addFilter();
    }
    
    addFilter() {
        
        this.value.filters.push({ key:"eq", args:[] });
        
    }
    
    removeFilter(index) {
        
        this.value.filters.splice(index,1);
        
    }
    
  

}