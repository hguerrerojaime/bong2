import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../app/index.component';
import { NgModule,Component } from '@angular/core';
import { BongPanelModule } from '../ap/index';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { 
    path: 'example-form',
    loadChildren: '../scripts/init/app.forms.module#AppFormsModule'
  }

];






@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

