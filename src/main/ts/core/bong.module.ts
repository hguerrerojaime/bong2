
import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { 
    AppNavbarComponent,
    AppMenuComponent,
    AppSidebarComponent,
    SidebarSearchComponent,
    AppBodyComponent,
    AppComponent,
    BONG_COMPONENTS
} from '../components/index'; 
    

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TextOptionsDirective } from '../directives/text.options.directive';

import { routing } from '../init/app.routing';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    routing,
    BrowserModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    TextOptionsDirective,
    AppNavbarComponent,
    AppMenuComponent,
    AppSidebarComponent,
    SidebarSearchComponent,
    AppBodyComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class BongModule {
    
}

