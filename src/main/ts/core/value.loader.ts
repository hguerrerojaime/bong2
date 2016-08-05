import {Observable} from 'rxjs/Observable';

export interface ValueLoader {
    
    loadValue(loader:Observable<any>);
    
}