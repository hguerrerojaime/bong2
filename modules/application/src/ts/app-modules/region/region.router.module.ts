import { NgModule } from '@angular/core';
import { BongFormsModule } from '../components/index';
import { RegionService } from '../services/index';
import { HttpModule } from '@angular/http';


import { RegionFormComponent } from '../app/region/region.form.component';
import { RegionShowComponent } from '../app/region/region.show.component';
import { RegionListComponent } from '../app/region/region.list.component';
import { RegionViewListComponent } from '../app/region/region.view.list.component';


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
    BongFormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers:[
  	RegionService
  ]
})
export class RegionRouteModule {}