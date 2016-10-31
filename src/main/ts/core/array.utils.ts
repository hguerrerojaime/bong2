
import {StringUtils} from './string.utils';

export class ArrayUtils {
    
    public static withFilter(array:any[],filter:Function):any {
        
        return {
            doWithIndex: function(action) {
                var indexes = [];
                for (let i in array) {
                    let item = array[i];
                    
                    if (filter(item)) {
                        indexes.push(i);
                    }
                }
                
                console.log(indexes);
                
                for (let index of indexes) {
                    action(index);
                }
            },
            doWithItem: function(action) {
                
                let foundItems = ArrayUtils.findAll(array,filter);
                
                for (let item of foundItems) {
                    action(item);
                }
                
            },
            removeAll: function() {
                this.doWithItem((item) => array.splice(array.indexOf(item),1));
            }
            
        };
        
    }
    
    public static findAll(array:any[],filter:Function) {
        
        let result:any[] = [];
        
        for (let item of array) {
            if (filter(item)) {
                result.push(item);
            }
        }
        
        return result;
    }

    public static find(array:any[],filter:Function) {
        
        let result:any[] = [];
        
        for (let item of array) {
            if (filter(item)) {
                return item;
            }
        }
        
        return null;
    }
    
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
    
    public static replaceText(array:any[],regex:any,replacement:string,ignoreNull:boolean = true):any[] {
        
        if (ignoreNull && array == null) return null;
        
        let result = [];
        
        for (let item of array) {
            
            result.push(item.replace(regex,replacement));
            
        }
        
        return result;
        
    }
    
    public static arrayUnique(array):any[] {
        let a = array.concat();
        for(let i=0; i<a.length; ++i) {
            for(let j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    }
    
}