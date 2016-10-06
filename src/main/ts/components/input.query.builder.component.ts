import { Component,Input } from '@angular/core';
import { InputJqueryComponent } from './input.jquery.component';
import '@plugins/other/query-builder/query-builder.min.js';

@Component({
    selector:'input-query-builder',
    template: `
        <div></div>
        <command-button 
            [label]="compiled ? 'Compiled!' : 'Compile Rules'"
            size="sm"
            icon="fa fa-bolt"
            [brand]="compiled ? 'success':'default'"
            [disabled]="compiled"
            (click)="compile()"
        ></command-button>
        <span class="label label-warning" *ngIf="!compiled">Needs to be compiled first!</span>
    `
})
export class InputQueryBuilderComponent extends InputJqueryComponent {
    
    private compiled:boolean = false;
    
    private jqElement;
            
    buildJQueryPlugin(jqElement) {
        
        this.jqElement = jqElement;
        
        jqElement.queryBuilder({
                filters: [
            /*
            * basic
            */
            {
                id: 'name',
                label: {
                en: 'Name',
                fr: 'Nom'
                },
                type: 'string',
                optgroup: 'core',
                default_value: 'Mistic',
                size: 30,
                unique: true
            },
            /*
            * textarea
            */
            {
                id: 'bson',
                label: 'BSON',
                type: 'string',
                input: 'textarea',
                operators: ['equal'],
                size: 30,
                rows: 3
            },
            /*
            * checkbox
            */
            {
                id: 'category',
                label: 'Category',
                type: 'integer',
                input: 'select',
                optgroup: 'core',
                values: {
                1: 'Books',
                2: 'Movies',
                3: 'Music',
                4: 'Tools',
                5: 'Goodies',
                6: 'Clothes'
                },
                colors: {
                1: 'foo',
                2: 'warning',
                5: 'success'
                },
                operators: ['in', 'not_in', 'equal', 'not_equal', 'is_null', 'is_not_null']
            }]
       });
       
       jqElement.on('change afterAddGroup.queryBuilder afterAddRule.queryBuilder afterDeleteGroup.queryBuilder afterDeleteRule.queryBuilder',() => {
           
            this.compiled = false;
           
       });
    }
    
    private compile() {
        this.compiled = this.isValid();
        
        this.value = this.jqElement.queryBuilder('getRules');
        
        console.log(this.value);
        
    }
    
    private isValid():boolean {
        return this.jqElement.queryBuilder('validate');
    }
   
     
}