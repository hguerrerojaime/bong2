import { NgModule } from '@angular/core';
import { BongFormsModule } from '../../../../bong.forms';
import { BongComponentsModule } from '../../../../bong.components';
import { RegionService } from '../../services/index';
import { HttpModule } from '@angular/http';


import { RegionFormComponent } from './region.form.component';
import { RegionShowComponent } from './region.show.component';
import { RegionListComponent } from './region.list.component';
import { RegionViewListComponent } from './region.view.list.component';


import { RouterModule,Routes } from '@angular/router';

let routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: RegionListComponent },
  { path: 'view', redirectTo: 'view/list' },
  { path: 'view/list', component: RegionViewListComponent },
  { path: 'new', component: RegionFormComponent },
	{ path: ":id", component: RegionShowComponent }
];

@NgModule({
  declarations: [ RegionFormComponent, RegionShowComponent, RegionListComponent, RegionViewListComponent ],
  imports: [
    BongComponentsModule,
    BongFormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers:[
  	RegionService
  ]
})
export class RegionRouterModule {}