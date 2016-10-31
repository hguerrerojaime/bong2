import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
import { MockCreateComponent }   from '../app/mock.create.component';
import { ExampleFormComponent } from '../app/example.form.component';
import { IndexComponent }   from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';
import { QBComponent } from '../app/qb.component';
import { routing }        from './app.routing';

import { AppComponent, BONG_COMPONENTS } from '../components/index';
import { FormsModule } from '@angular/forms';

import { BongModule } from '../core/index'; 
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LookupService } from '../services/lookup.service';
import { UserService } from '../services/user.service';
import { HttpModule } from '@angular/http';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BongModule,
    FormsModule,
    routing,
    HttpModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    IndexComponent,
    FormsComponent,
    TablesComponent,
    MockCreateComponent, 
    QBComponent,
    ExampleFormComponent,
    BONG_COMPONENTS
  ],
  entryComponents: [MockCreateComponent],
  providers: [
    LookupService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}




// import { ElementRef } from '@angular/core';
// import { BrowserModule }  from '@angular/platform-browser';
// import { BaseComponent } from '../components/base.component';

// @Component({
//   selector: 'app',
//   template: 'Hi'
// })
// class MyComponent extends BaseComponent {

//   constructor(elementRef:ElementRef) {
//       super(elementRef);
//   }

// }

// @NgModule({
//   imports: [
//      BrowserModule
//   ],
//   declarations: [
//      MyComponent
//   ],
//   bootstrap: [ MyComponent ]
// })
// export class AppModule {}



