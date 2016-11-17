import { NgModule,Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
//import { ExampleFormComponent }   from '../app/example.form.component';
//import { FormsModule } from '@angular/forms';
//import { BongFormsModule, BongComponentsModule } from '../components/index';

//import { LookupService, UserService } from '../services/index';


@Component({
    selector:'<mycomp>',
    template:'<router-outlet></router-outlet>'
})
class MyComp {}

@Component({
    selector:'<mycomp2>',
    template:'yesaaa'
})
class MyComp2 {}


const routes: Routes = [

  { 
    path: '',
    component: MyComp
  }

];



@NgModule({
  declarations: [ MyComp, MyComp2 ],
  imports: [
    // BongFormsModule,
    // BongComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppFormsModule {}