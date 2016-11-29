import { RouterModule,Routes } from '@angular/router';
import { Type } from '@angular/core';
 
export const singleChildRoute = (component:Type<any>):any => {

	let routes: Routes = [
	  { path: '', component: component }
	];

	return RouterModule.forChild(routes);

};