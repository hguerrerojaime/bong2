import { 
    Component,
    Input,
    forwardRef,
    QueryList,
    ContentChildren
} from '@angular/core';
import { DefaultJqueryComponent } from './default.jquery.component';
import { DatatableColumnComponent } from './datatable.column.component';

import '@plugins/node/datatables.net/js/jquery.dataTables.js';
import '@plugins/node/datatables.net-bs/js/dataTables.bootstrap.js';

declare var System;

@Component({
    selector:'datatable',
    template: `
        <table class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th *ngFor="let column of columns.toArray()"> 
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of data">
                <td *ngFor="let column of columns.toArray()">
                    <span *ngIf="!column.hasBody()">
                        {{ row[column.field] }}
                    </span>
                </td>
            </tr>
         </tbody>
        </table>
    `,
    styles: [
        '.table thead tr th { background-color: #e7e7e7; }'
    ]
})
export class DatatableComponent extends DefaultJqueryComponent {
        
    @ContentChildren(forwardRef(() =>DatatableColumnComponent))
    columns: QueryList<DatatableColumnComponent>;
    
    @Input()
    data:any[];
    
    buildJQueryPlugin(jqElement) {
        jqElement.DataTable();
    }

}