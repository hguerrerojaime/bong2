import { TModel } from './t.model';

export class TLookup<K> extends TModel { 

    public id:K,
    public key:string,
    public value:string
    
    constructor(object:Object = null) {
        super(object);
    }

    public json():K {
        return this.id;
    }


}