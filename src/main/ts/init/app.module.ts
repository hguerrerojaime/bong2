import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockCreateComponent }   from '../app/mock.create.component';
import { ExampleFormComponent } from '../app/example.form.component';
import { IndexComponent }   from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
import { TablesComponent } from '../app/tables.component';
import { QBComponent } from '../app/qb.component';
import { routing }        from './app.routing';

import { AppComponent, BONG_COMPONENTS } from '../components/index';
import { FormsModule }    from '@angular/forms';

import { BongModule } from '../core/index'; 
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BongModule,
    FormsModule,
    routing,
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
  bootstrap: [ AppComponent ]
})
export class AppModule {}

