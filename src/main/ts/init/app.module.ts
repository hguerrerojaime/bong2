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


import { NgModule, Component } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from '../app/app.component';
import { IndexComponent }   from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';
import { routing }        from './app.routing';
import { BONG_COMPONENTS } from '@bong/components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    FormsComponent,
    TablesComponent,
    BONG_COMPONENTS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

