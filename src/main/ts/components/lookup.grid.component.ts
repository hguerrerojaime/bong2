import { Component,Input, Output } from '@angular/core';
import { CommandButtonComponent } from './command.button.component';
import { InlineLoaderComponent } from './inline.loader.component';
import { InputTextComponent } from './input.text.component';
import { Observable } from 'rxjs/Observable';
import { ValueLoader, ArrayUtils } from '@bong/core';

@Component({
    selector: 'lookup-grid',
    template: `
        <input-text [(ngModel)]="search" (ngModelChange)="doSearch()"></input-text>
        <hr/>
        <table class="table table-condensed table-striped" *ngIf="data.length > 0">
            <thead>
               <tr>
                   <th class="key-column">Key</th>
                   <th>Value</th>
               </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of data">
                    <td><command-button size="sm" [label]="item.key" blockWidth="true"></command-button></td>
                    <td>{{item.value}}</td>
                </tr>
            </tbody>
        </table>
        <div class="well well-sm center" *ngIf="data.length == 0 || isLoading">
            <inline-loader *ngIf="isLoading"></inline-loader>
            <span *ngIf="data.length == 0 && !isLoading">No records found</span>
        </div>
    `,
    styles: [
        '.key-column { width: 25%; }',
        '.center { text-align: center; }'
    ],
    directives: [InputTextComponent,CommandButtonComponent,InlineLoaderComponent] 
})
export class LookupGridComponent implements ValueLoader {
     
     @Output()
     selectedItem:any = {};
        
     search:string;
     private isLoading:boolean = false;
     private data:Array<any> = [];
     private fullData:Array<any> = [];
     
     
     loadValue(value:Observable<any>) {
        this.search = null;
        this.data = [];
        this.fullData = [];
        this.isLoading = true;
        
        value.subscribe((result) => {
            this.isLoading = false;
            this.fullData = result;
            this.doSearch();
        });
        
    }
    
    doSearch() {
        this.data = ArrayUtils.findAllLike(this.fullData,this.search);
    }
          
}