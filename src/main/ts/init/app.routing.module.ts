import { Routes, RouterModule } from '@angular/router';


import { NgModule,Component } from '@angular/core';
import { BongComponentsModule } from '../components/index';
import { AppBodyComponent } from '../ap/app.body.component';
//import { ExampleFormComponent }   from '../app/example.form.component';

const routes: Routes = [
  
  { 
    path: '',
    loadChildren: '../scripts/routes/index.route.module#IndexRouteModule'
    
  }, {
    path: 'example-form',
    loadChildren: '../scripts/routes/example.form.route.module#ExampleFormRouteModule'
    
  },

  {
    path: 'region',
    loadChildren: '../scripts/routes/region.route.module#RegionRouteModule'
    
  }
  
];


@NgModule({

  imports: [
    BongComponentsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

