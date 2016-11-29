import { Routes } from '@angular/router';

export const routes: Routes = [
  
  { 
    path: '',
    loadChildren: '../scripts/application/src/ts/app-modules/index/index.router.module#IndexRouterModule'
    
  },
  {
    path: 'region',
    loadChildren: '../scripts/application/src/ts/app-modules/region/region.router.module#RegionRouterModule'
    
  }
  
];