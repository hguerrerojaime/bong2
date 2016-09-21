import { Component } from '@angular/core';

@Component({
  selector: 'data-table',
  template: `
     <div class="table-wrapper">
        <table class="dt table table-striped">
            <thead>
                <tr>
                    <td colspan="3">
                        <div class="col-md-2">
                            <select class="form-control">
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="col-md-4 pull-right">
                            <input-text></input-text>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="actions">Actions</th>
                    <th>Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <link-button label="" size="sm" brand="info" icon="fa fa-search"></link-button>
                        <link-button label="" size="sm" brand="success" icon="fa fa-pencil"></link-button>
                        <link-button label="" size="sm" brand="danger" icon="fa fa-close"></link-button>
                    </td>
                    <td>Hola</td>
                    <td>Hola</td>
                </tr>
                <tr>
                    <td>
                        <link-button label="" size="sm" brand="info" icon="fa fa-search"></link-button>
                        <link-button label="" size="sm" brand="success" icon="fa fa-pencil"></link-button>
                        <link-button label="" size="sm" brand="danger" icon="fa fa-close"></link-button>
                    </td>
                    <td>Hola</td>
                    <td>Hola</td>
                </tr>
                <tr>
                    <td>
                        <link-button label="" size="sm" brand="info" icon="fa fa-search"></link-button>
                        <link-button label="" size="sm" brand="success" icon="fa fa-pencil"></link-button>
                        <link-button label="" size="sm" brand="danger" icon="fa fa-close"></link-button>
                    </td>
                    <td>Hola</td>
                    <td>Hola</td>
                </tr>
            </tbody>
        </table>
     </div>
  `
})
export class DataTableComponent {

}