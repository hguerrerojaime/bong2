import { Component,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { DefaultJqueryComponent } from '@bong/components';
import { StringUtils } from '../core/string.utils';

declare var jQuery:any;

@Component({
    selector:'modal',
    template:`
        <div class="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" id="{{ modalId }}">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="modalLabel"><i class="{{ icon }}" *ngIf="icon"></i> {{ title }}</h4>
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
    
    @Input()
    icon:string;
    
    @ViewChild("footer")
    footer:ElementRef;
    
    public modalId = "modal_"+StringUtils.random();
    
    jqElement:any;
    
    hasFooter:boolean = true;
    
    buildJQueryPlugin(jqElement) {
        jqElement.on('hide.bs.modal', function(){
            let $this = jQuery(this);
            let stackCount = jQuery('.modal.in').length-1;
            jQuery('.modal.modal-stack-'+stackCount+' .modal-dialog.aside').removeClass('aside');
        });
        
        jQuery(document).on('show.bs.modal', '.modal', function (event) {
            var zIndex = 1040 + (10 * jQuery('.modal:visible').length);
            
            let $this = jQuery(this);
            
            $this.css('z-index', zIndex);
            
            setTimeout(function() {
                jQuery('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
                jQuery('.modal.in .modal-dialog').addClass('aside');
                
                let stackCount = jQuery('.modal.in').length;
   
                $this.find('.modal-dialog').removeClass('aside');
                $this.addClass('modal-stack-'+stackCount);
                
                
            }, 0);
        });

        jqElement.appendTo('body');
        
        this.jqElement = jqElement;
        
    }
    
    show() {

        this.jqElement.modal('show');

    }
    
    hide() {
        this.jqElement.modal("hide");
    }
    
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.hasFooter = this.hasModalFooter();
    }
    
    hasModalFooter():boolean {
        return this.footer.nativeElement.children.length > 0;
    }
    
}