import { NgModule, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from '../app/app.component';
import { IndexComponent }   from '../app/index.component';
import { FormsComponent } from '../app/forms.component';
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
    FormsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ provide(PLATFORM_DIRECTIVES, {useValue: BONG_COMPONENTS, multi: true}) ]
})
export class AppModule {}

