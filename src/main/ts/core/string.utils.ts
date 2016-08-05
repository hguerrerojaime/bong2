
export class StringUtils {
    
    public static isUpperCase(c:string):boolean {
        return c == c.toUpperCase();
    }
    
    public static getResourceNameFromClass(componentClass:any):string {
        
        let className:string = componentClass.name;
        let result:string = "";
        let firstRun:boolean = true;
        
        console.log(className);

        for (let char of className) {
            
            let prefix:string = "";
            
            if (StringUtils.isUpperCase(char)) {
                if (firstRun) {
                    firstRun = false;
                } else {
                    prefix = ".";
                }
            }
            
            result+=prefix+char.toLowerCase();
        }

        return result;
        
    }
    
    public static isEmpty(s:string):boolean {
        return s == null || s == '';
    }
    
    public static isNotEmpty(s: string):boolean {
        return !StringUtils.isEmpty(s);
    }
    
}