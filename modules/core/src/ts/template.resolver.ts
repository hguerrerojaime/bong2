import { BONG_CONFIG } from './config';
import { StringUtils } from './string.utils';

export class TemplateResolver {

    public static resolve(componentClass:any,path:string = ""):string {
        let sourcePath:string = BONG_CONFIG.templateSrc + (path == "" ? path : "/"+path );
        let resourceName:string = StringUtils.getResourceNameFromClass(componentClass).replace("component","");

        let templatePath:string = sourcePath+"/"+resourceName+"html";

        return templatePath;
    }
    
    public static compile(template:string,scope:any) {
        
    }

}