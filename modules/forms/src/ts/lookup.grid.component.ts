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
                (ngModelChange)="doSearch(true)"
                #txtSearch></input-text>
            <hr/>

            <div *ngIf="pageCount > 1">
                <ul class="pager" >
                  <li><a  href="javascript:void(0);" 
                          (click)="isFirstPage() ? null : goToPage(currentPage - 1)" 
                          [class.disabled]="isFirstPage()"

                       >Previous</a></li>
                  <li><a href="javascript:void(0);" 
                         (click)="isLastPage() ? null : goToPage(currentPage + 1)" 
                         [class.disabled]="isLastPage()"
                       >Next</a></li>
                </ul>
                <hr/>
            </div>


            <table class="table table-condensed table-striped" *ngIf="data.length > 0">
                <thead>
                <tr>
                    <th class="key-column">Key</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let item of pagedData">
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

    private static PAGE_SIZE:number = 10;
     
     @Output()
     onSelectedItem:EventEmitter<any> = new EventEmitter();
     
     @ViewChild("txtSearch")
     public txtSearch:InputTextComponent;
     
     private ready = false;   
     search:string;
     private lastSearch:string;
     private isLoading:boolean = false;
     private pagedData:Array<any> = [];
     private data:Array<any> = [];
     private fullData:Array<any> = [];
     private offset:number = 0;
          
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

    doSearch(resetOffset:boolean = false) {

        if (resetOffset) {
            this.offset = 0;
        }

        let isNarrowedSearch:boolean = this.search != null && this.search.indexOf(this.lastSearch) >= 0;
        let hasSearchData = this.data.length > 0;

        
        if (isNarrowedSearch && hasSearchData) {
            this.data = ArrayUtils.findAllLike(this.data,this.search);
        } else {
            this.data = ArrayUtils.findAllLike(this.fullData,this.search);
        }

        this.pagedData = this.data.length > LookupGridComponent.PAGE_SIZE ?
             this.data.slice(this.offset,this.offset+LookupGridComponent.PAGE_SIZE) :
             this.data
        ;
        
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

     private goToPage(pageNumber:number) {
         this.offset = (pageNumber - 1) * LookupGridComponent.PAGE_SIZE;
         this.doSearch();
     }

     private get pageCount(): number {
         return Math.ceil(this.data.length/LookupGridComponent.PAGE_SIZE);
     }

     private get currentPage(): number {
         return (this.offset / LookupGridComponent.PAGE_SIZE) + 1;
     }

     private isLastPage():boolean {
  
         return this.currentPage >= this.pageCount;
     }

     private isFirstPage(): boolean {
    
         return this.currentPage <= 1;
     }
          
}