import { StringUtils } from './string.utils';

declare var System:any;

export class ClassLoader {
    
    public static load(className:string,path:string = "./"):any {
        
        let resource = path+StringUtils.getResourceNameFromClass(className);

        return System.import(resource)
                .then(clazzModule => clazzModule[className])
        ;
    }
    
}