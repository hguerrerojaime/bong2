import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from '../routes/app.routes';


@NgModule({

  imports: [
    BongComponentsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}

