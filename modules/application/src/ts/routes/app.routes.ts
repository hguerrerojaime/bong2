import { Routes } from '@angular/router';

export const routes: Routes = [
  
  { 
    path: '',
    loadChildren: '../scripts/routes/index.route.module#IndexRouteModule'
    
  },
  {
    path: 'region',
    loadChildren: '../scripts/routes/region.route.module#RegionRouteModule'
    
  }
  
];