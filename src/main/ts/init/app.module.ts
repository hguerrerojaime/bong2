// import { NgModule, Component } from '@angular/core';
// import { BrowserModule }  from '@angular/platform-browser';
// import { BONG_COMPONENTS } from '@bong/components';

// @Component({
//   selector:'app',
//   template:'<strong>hola mundo</strong>'
// })
// class App {
  
// }

// @NgModule({
//   imports: [
//     BrowserModule
//   ],
//   declarations: [
//     App
//   ],
//   bootstrap: [ App ],
//   providers: [ /* provide(PLATFORM_DIRECTIVES, {useValue: BONG_COMPONENTS, multi: true}) */ ]
// })
// export class AppModule {}


import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from '../app/app.component';
import { AppMenuComponent }   from '../app/app.menu.component';
import { AppBodyComponent }   from '../app/app.body.component';
import { AppNavbarComponent }   from '../app/app.navbar.component';
import { AppSidebarComponent }   from '../app/app.sidebar.component';
import { SidebarSearchComponent }   from '../app/sidebar.search.component';
import { IndexComponent }   from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';
import { routing }        from './app.routing';
import { BONG_COMPONENTS } from '@bong/components';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TextOptionsDirective } from '../directives/text.options.directive';

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
    TextOptionsDirective,
    AppComponent,
    AppNavbarComponent,
    AppMenuComponent,
    AppBodyComponent,
    AppSidebarComponent,
    IndexComponent,
    FormsComponent,
    TablesComponent,
    SidebarSearchComponent,
    BONG_COMPONENTS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

