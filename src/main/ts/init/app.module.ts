// import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
// import { MockCreateComponent }   from '../app/mock.create.component';
// import { ExampleFormComponent } from '../app/example.form.component';
// import { IndexComponent }   from '../app/index.component';
// import { FormsComponent } from '../app/forms.component';
// import { TablesComponent } from '../app/tables.component';
// import { QBComponent } from '../app/qb.component';
// import { routing }        from './app.routing';

// import { AppComponent, BONG_COMPONENTS } from '../components/index';
// import { FormsModule } from '@angular/forms';

// import { BongModule } from '../core/index'; 
// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
// import { LookupService } from '../services/lookup.service';
// import { UserService } from '../services/user.service';
// import { HttpModule } from '@angular/http';
// import { DataTableModule } from "angular2-datatable";
// import { DragulaModule } from 'ng2-dragula/ng2-dragula';
// import { LayoutEditorComponent } from '../app/layout.editor.component';


// @NgModule({
//   schemas: [
//     CUSTOM_ELEMENTS_SCHEMA
//   ],
//   imports: [
//     BongModule,
//     routing,
//     FormsModule,
//     SlimLoadingBarModule.forRoot(),
//     DataTableModule,
//     DragulaModule
//   ],
//   declarations: [
//     IndexComponent,
//     ExampleFormComponent,
//     FormsComponent,
//     QBComponent,
//     TablesComponent,
//     LayoutEditorComponent,
//     BONG_COMPONENTS
//   ],
//   entryComponents: [MockCreateComponent],
//   providers: [
//     LookupService,
//     UserService
//   ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule {}



import { NgModule,Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ElementRef } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BaseComponent } from '../components/base.component';
import { BONG_COMPONENTS } from '../components/index';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  template: 'Hi'
})
class MyComponent extends BaseComponent {

  constructor(elementRef:ElementRef) {
      super(elementRef);
  }

}

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
     BrowserModule,
     FormsModule
  ],
  declarations: [
     MyComponent,
     BONG_COMPONENTS
  ],
  bootstrap: [ MyComponent ]
})
export class AppModule {}



