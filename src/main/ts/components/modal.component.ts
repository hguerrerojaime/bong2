import { Component,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { DefaultJqueryComponent } from '@bong/components';

@Component({
    selector:'modal',
    template:`
        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header clearfix">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="modalLabel">{{ title }}</h4>
              </div>
              <div class="modal-body">
                 <ng-content></ng-content>
              </div>
              <div class="modal-footer" #footer *ngIf="hasFooter">
                 <ng-content select="modal-footer"></ng-content>
              </div>
            </div>
          </div>
        </div>
    `    
})
export class ModalComponent extends DefaultJqueryComponent {
    
    @Input()
    title:string = "CRM";
    
    @ViewChild("footer")
    footer:ElementRef;
    
    jqElement:any;
    
    hasFooter:boolean = true;
    
    buildJQueryPlugin(jqElement) {
        this.jqElement = jqElement;
    }
    
    show() {
        this.jqElement.modal('show');
    }
    
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.hasFooter = this.hasModalFooter();
    }
    
    hasModalFooter():boolean {
        return this.footer.nativeElement.children.length > 0;
    }
    
}