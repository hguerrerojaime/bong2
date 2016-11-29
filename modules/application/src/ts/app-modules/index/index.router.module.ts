import { NgModule } from '@angular/core';
import { BongComponentsModule } from '../../../../bong.components';
import { IndexComponent } from './index.component';
import { singleChildRoute } from '../../../../bong.admin.panel';

@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    BongComponentsModule,
    singleChildRoute(IndexComponent)
  ]
})
export class IndexRouterModule {}