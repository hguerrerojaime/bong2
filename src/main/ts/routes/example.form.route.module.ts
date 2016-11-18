import { NgModule,Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ExampleFormComponent }   from '../app/example.form.component';
//import { FormsModule } from '@angular/forms';
import { BongFormsModule, BongComponentsModule } from '../components/index';


import { LookupService, UserService } from '../services/index';
import { HttpModule } from '@angular/http';



const routes: Routes = [
  { path: '', component: ExampleFormComponent }
];

@NgModule({
  declarations: [ ExampleFormComponent ],
  imports: [
    BongFormsModule,
    BongComponentsModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  exports: [
      RouterModule,
      BongFormsModule
  ],
  providers: [ LookupService, UserService ]
})
export class ExampleFormRouteModule {}