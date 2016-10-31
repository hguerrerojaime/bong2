import { Component, OnInit,Inject,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
            aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a class="navbar-brand" href="#"><ng-content select="navbar-brand"></ng-content></a>
    </div>
    <ul class="nav navbar-nav navbar-right">
        <menu-item href="/">Realm Home</menu-item>
        <dd-menu label="Applications">
            <menu-item>Payroll</menu-item>
            <menu-item>Employees</menu-item>
            <menu-item>POS</menu-item>
        </dd-menu>

        <dd-menu label="Humberto Guerrero Jaime">
              <menu-item>Settings</menu-item>
              <menu-item>Logout</menu-item>
        </dd-menu>
      </ul>
    `
})
export class AppNavbarComponent {
        
    
    
}