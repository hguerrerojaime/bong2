import { Component, OnInit } from '@angular/core';
import { AppBodyComponent } from './app.body.component.ts'
import { AppMenuComponent } from './app.menu.component';

declare var jQuery:any;

@Component({
  selector: 'app',
  template: `
        <div id="wrapper">
          <app-menu></app-menu>
          <div id="page-wrapper" style="min-height: 261px;">
            <app-body></app-body>
          </div>
        </div>
  `,
  directives: [ AppMenuComponent,AppBodyComponent ]
})
export class AppComponent implements OnInit {

    ngOnInit() {
     
    }


}