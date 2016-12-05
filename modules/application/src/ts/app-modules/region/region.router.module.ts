import { NgModule } from '@angular/core';
import { BongFormsModule } from '../../../../bong.forms';
import { BongComponentsModule } from '../../../../bong.components';
import { BongValidationModule } from '../../../../bong.validation';
import { RegionService } from '../../services/index';
import { HttpModule } from '@angular/http';


import { RegionNewComponent } from './region.new.component';
import { RegionEditComponent } from './region.edit.component';
import { RegionFormComponent } from './region.form.component';
import { RegionShowComponent } from './region.show.component';
import { RegionListComponent } from './region.list.component';
import { RouterModule,Routes } from '@angular/router';

let routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: RegionListComponent },
  { path: 'new', component: RegionNewComponent },
	{ path: ":id", component: RegionShowComponent },
  { path: ":id/edit", component: RegionEditComponent }
];

@NgModule({
  declarations: [
    RegionNewComponent,
    RegionEditComponent,
    RegionFormComponent,
    RegionShowComponent,
    RegionListComponent
  ],
  imports: [
    BongComponentsModule,
    BongFormsModule,
    BongValidationModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers:[
  	RegionService
  ]
})
export class RegionRouterModule {}