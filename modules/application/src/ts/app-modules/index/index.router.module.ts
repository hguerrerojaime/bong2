import { NgModule } from '@angular/core';
import { BongFormsModule, BongComponentsModule } from '../components/index';
import { LookupService, UserService } from '../services/index';
import { IndexComponent } from '../app/index.component';
import { singleChildRoute } from './routing.utils';

@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    BongComponentsModule,
    singleChildRoute(IndexComponent)
  ]
})
export class IndexRouteModule {}