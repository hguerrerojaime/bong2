import { Injectable } from '@angular/core';


import '@plugins/node/noty/js/noty/packaged/jquery.noty.packaged.min.js';
import '@plugins/node/noty/js/noty/themes/bootstrap.js';

@Injectable()
export class Notifier {

    message(message:string):void {
    	this.popupNoty(message,'alert')
    }

    info(message:string):void {
    	this.popupNoty(message,'information')
    }

    success(message:string):void {
    	this.popupNoty(message,'success')
    }

    warn(message:string):void {
    	this.popupNoty(message,'warning')
    }

    error(message:string):void {
    	this.popupNoty(message,'error')
    }

    private popupNoty(message:string,brand:string) {
    	noty({
    		layout:'topRight',
    		type:brand,
    		text: message,
    		timeout:2000
    	});
    }
   

}