import { Component,Inject, OnInit } from '@angular/core';
import { TemplateResolver } from '@bong/core';

@Component({
    selector: 'tables-ctrl',
    templateUrl: TemplateResolver.resolve(TablesComponent,'app')
})
export class TablesComponent {

    
}