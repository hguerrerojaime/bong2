import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'forms', component: FormsComponent }
  { path: 'tables', component: TablesComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);