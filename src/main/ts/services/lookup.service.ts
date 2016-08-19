import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LookupService  {
    
    public lookup(view:string = null) : Observable<any[]> {
        
        let observable = new Observable(observer => {
           
           let data = [
             { key: 'ETN', value: 'ENLACES TERRESTRES NACIONALES' },
             { key: 'FA', value: 'FLECHA AMARILLA' },
             { key: 'PP', value: 'PRIMERA PLUS' },
             { key: 'OM', value: 'OMNIBUS DE MEXICO' }
           ];

           
            observer.next(data);
            observer.complete();
          
           
       });

       return observable;
        
    }
    
}