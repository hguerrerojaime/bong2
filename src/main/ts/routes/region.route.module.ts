import { NgModule } from '@angular/core';
import { BongFormsModule } from '../components/index';
import { RegionService } from '../services/index';
import { HttpModule } from '@angular/http';


import { RegionFormComponent } from '../app/region/region.form.component';
import { RegionShowComponent } from '../app/region/region.show.component';

import { RouterModule,Routes } from '@angular/router';

let routes: Routes = [
  { path: 'new', component: RegionFormComponent },
	{ path: ":id", component: RegionShowComponent }

];

@NgModule({
  declarations: [ RegionFormComponent, RegionShowComponent ],
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