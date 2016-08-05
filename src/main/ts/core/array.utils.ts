
import {StringUtils} from './string.utils';

export class ArrayUtils {
    
    public static findAllLike(array:any,exp:string) : any {
        
        if (!ArrayUtils.isIterable(array)) {
            throw new TypeError("array argument must be iterable");
        }
        
        if (StringUtils.isEmpty(exp)) {
            return array;
        }
        
        let result : any[] = [];
        
        for (let key in array) {
            let element = array[key];
            let found:boolean = false;
            
            found = ArrayUtils.existsLike(element,exp);
            
            if (found) {
                result.push(element);
            }
        }
        return result;
    }
    
    public static existsLike(object:any, exp:string) : boolean {

        //If is NOT Iterable
        if(!ArrayUtils.isIterable(object)) {
            return (""+object).toUpperCase().indexOf(exp.toUpperCase()) >=0;
        }
        
        for (let key in object) {
            let element = object[key];
            if (ArrayUtils.existsLike(element,exp)) {
                return true;
            }
        }
        return false;
        
    }
    
    public static isIterable(object:any) : boolean {
        return object instanceof Array || typeof object === "object";
    }
    
}