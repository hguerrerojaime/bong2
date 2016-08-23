import { Component } from '@angular/core';

@Component({
  selector: 'data-table',
  template: `
     <table class="data-table table table-condensed table-striped table-hover">
        <thead>
   
            <tr>
                <th>Actions</th>
                <th>Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Hola</th>
                <th>Hola</th>
                <th>Hola</th>
            </tr>
            <tr>
                <th>Hola</th>
                <th>Hola</th>
                <th>Hola</th>
            </tr>
        </tbody>
     </table>
  `,
  styles: [
      `
        .data-table thead tr th {
            border: 1px solid #ccc;
            
            background: rgb(238,238,238);
background: -moz-linear-gradient(top,  rgba(238,238,238,1) 48%, rgba(226,226,226,1) 100%);
background: -webkit-linear-gradient(top,  rgba(238,238,238,1) 48%,rgba(226,226,226,1) 100%);
background: linear-gradient(to bottom,  rgba(238,238,238,1) 48%,rgba(226,226,226,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#e2e2e2',GradientType=0 );

        } 
     `
  ]
})
export class DataTableComponent {

}