import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BongFormsModule, BongComponentsModule } from '../components/index';
import { LookupService, UserService } from '../services/index';
import { IndexComponent } from '../app/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    BongComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class IndexRouteModule {}