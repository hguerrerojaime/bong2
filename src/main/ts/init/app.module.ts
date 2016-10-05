import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MockCreateComponent }   from '../app/mock.create.component';
import { IndexComponent }   from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';
import { QBComponent } from '../app/qb.component';
import { routing }        from './app.routing';
import {
  AppComponent,
  AppMenuComponent,
  AppBodyComponent,
  AppNavbarComponent,
  AppSidebarComponent,
  SidebarSearchComponent,
  BONG_COMPONENTS 
} from '@bong/components';

import { AlertManager } from '@bong/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TextOptionsDirective } from '../directives/text.options.directive';
import { KeyCombinationDirective } from '../directives/key.combination.directive';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    KeyCombinationDirective,
    TextOptionsDirective,
    IndexComponent,
    FormsComponent,
    TablesComponent,
    MockCreateComponent,
    QBComponent
    BONG_COMPONENTS
  ],
  entryComponents: [MockCreateComponent],
  bootstrap: [ AppComponent ],
  providers: [
    AlertManager
  ]
})
export class AppModule {}

