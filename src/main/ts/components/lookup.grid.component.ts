import { Component,Input, Output, ViewChild,EventEmitter } from '@angular/core';
import { CommandButtonComponent } from './command.button.component';
import { InlineLoaderComponent } from './inline.loader.component';
import { InputTextComponent } from './input.text.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ValueLoader, ArrayUtils,StringUtils } from '../core/index';

@Component({
    selector: 'lookup-grid',
    template: `
        <form #lookupForm="ngForm" (ngSubmit)="emitSelectedItem()" >
         
            <input-text
                name="search"
                [(ngModel)]="search" 
                (ngModelChange)="doSearch()"
                #txtSearch></input-text>
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
                        <td><command-button 
                                    size="sm" 
                                    [label]="item.key" 
                                    blockWidth="true" 
                                    (click)="emitSelectedItem(item)" 
                            ></command-button></td>
                        <td>{{item.value}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="well well-sm center" *ngIf="data.length == 0 || isLoading">
                <inline-loader *ngIf="isLoading"></inline-loader>
                <span *ngIf="data.length == 0 && !isLoading">No records found</span>
            </div>
        </form>
    `,
    styles: [
        '.key-column { width: 25%; }',
        '.center { text-align: center; }'
    ]
})
export class LookupGridComponent implements ValueLoader {
     
     @Output()
     onSelectedItem:EventEmitter<any> = new EventEmitter();
     
     @ViewChild("txtSearch")
     public txtSearch:InputTextComponent;
     
     private ready = false;
        
     search:string;
     private lastSearch:string;
     private isLoading:boolean = false;
     private data:Array<any> = [];
     private fullData:Array<any> = [];
     
     
     
     loadValue(itemsLoader:Observable<any[]>) {
        this.search = null;
        this.data = [];
        this.fullData = [];
        this.isLoading = true;
        
        itemsLoader.subscribe((result) => {
            this.isLoading = false;
            this.fullData = result;
            this.doSearch();
        });
 
    }
    
    doSearch() {

        let isNarrowedSearch:boolean = this.search != null && this.search.indexOf(this.lastSearch) >= 0;
        let hasSearchData = this.data.length > 0;

        
        if (isNarrowedSearch && hasSearchData) {
            this.data = ArrayUtils.findAllLike(this.data,this.search);
        } else {
            this.data = ArrayUtils.findAllLike(this.fullData,this.search);
        }
        
        this.lastSearch = this.search;
        
    }
    
    emitSelectedItem(item = null) {
        
        if (item == null) {
            item = this.currentItem;
        }
        
        if (item != null) {
            this.onSelectedItem.emit(item);
        }
        
        return false;
    }
    
     get currentItem() {
         
         let result = null;
         
         if (this.data.length > 0) {
             result = this.data[0];
         }

         return result;
         
     }
          
}