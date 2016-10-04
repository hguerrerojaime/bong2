import { Component,Input } from '@angular/core';
import { DefaultJqueryComponent } from './default.jquery.component';

import '@plugins/node/datatables.net/js/jquery.dataTables.js';
import '@plugins/node/datatables.net-bs/js/dataTables.bootstrap.js';

declare var System;

@Component({
    selector:'datatable',
    template: `
        <table class="table table-striped table-bordered" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th>Actions</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <command-button icon="fa fa-search" label="" size="sm" brand="info"></command-button>
                    <command-button icon="fa fa-pencil" label="" size="sm" brand="success"></command-button>
                    <command-button icon="fa fa-close" label="" size="sm" brand="danger"></command-button>
                    
                </td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
            </tr>
         </tbody>
        </table>
    `,
    styles: [
        '.table thead tr th { background-color: #e7e7e7; }'
    ]
})
export class DatatableComponent extends DefaultJqueryComponent {
        
    
    
    buildJQueryPlugin(jqElement) {
        
        
        
        jqElement.DataTable();
    }
   
     
}