import { Injectable } from '@angular/core';


import '@plugins/node/noty/js/noty/packaged/jquery.noty.packaged.min.js';
//import '@plugins/node/noty/js/noty/themes/bootstrap.js';

declare var noty;

@Injectable()
export class Notifier {

    alert(message:string):void {
    	this.popupNoty(message,'alert','fa fa-bell');
    }

    info(message:string):void {
    	this.popupNoty(message,'information','fa fa-info');
    }

    success(message:string):void {
    	this.popupNoty(message,'success','fa fa-check');
    }

    warn(message:string):void {
    	this.popupNoty(message,'warning','fa fa-exclamation-triangle');
    }

    error(message:string):void {
    	this.popupNoty(message,'error','fa fa-times-circle-o')
    }

    private popupNoty(message:string,brand:string,icon:string) {
    	noty({
    		layout:'topRight',
    		type:brand,
    		text: '<i class="'+icon+'"></i> '+message,
    		timeout:2000
    	});
    }
   

}