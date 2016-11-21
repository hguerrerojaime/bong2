import { NgModule } from '@angular/core';
import { ExampleFormComponent }   from '../app/example.form.component';
import { BongFormsModule } from '../components/index';
import { LookupService, UserService } from '../services/index';
import { HttpModule } from '@angular/http';
import { singleChildRoute } from './routing.utils';


@NgModule({
  declarations: [ ExampleFormComponent ],
  imports: [
    BongFormsModule,
    singleChildRoute(ExampleFormComponent),
    HttpModule
  ],
  providers: [ LookupService, UserService ]
})
export class ExampleFormRouteModule {}