import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
import { AppRouterModule }        from '../app-modules/app.router.module';
import { AppComponent, BongPanelModule } from '../../../bong.admin.panel';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BongPanelModule,
    AppRouterModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

