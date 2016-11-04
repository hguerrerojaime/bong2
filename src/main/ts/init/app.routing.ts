import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';
import { QBComponent } from '../app/qb.component';
import { ExampleFormComponent } from '../app/example.form.component';
import { LayoutEditorComponent } from '../app/layout.editor.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'query-builder', component: QBComponent },
  { path: 'example-form', component: ExampleFormComponent },
  { path: 'layout-editor', component: LayoutEditorComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing:any = RouterModule.forRoot(appRoutes);