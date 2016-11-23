import { Component, OnInit,Inject,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" 
            data-toggle="collapse" 
            data-target=".navbar-collapse" aria-expanded="false"
            aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a class="navbar-brand" href="#"><ng-content select="navbar-brand"></ng-content></a>
    </div>
    <ul class="nav navbar-nav navbar-top-links navbar-right">
        <li><a href="#">Realm Home </a></li>
        <li class="dropdown">
            <a href="#" 
                    class="dropdown-toggle" 
                    data-toggle="dropdown" 
                    role="button" aria-haspopup="true"
                    >Applications</a>
            <ul class="dropdown-menu">
                <li><a href="javascript:void(0);">Payroll</a></li>
            </ul>
        </li>

   
      </ul>
    `
})
export class AppNavbarComponent {
        
    
    
}