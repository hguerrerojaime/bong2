import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent }   from '../app/index.component';
import { FormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule }        from './app.routing.module';
import { AppComponent, BongPanelModule } from '../ap/index';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BongPanelModule,
    SlimLoadingBarModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

