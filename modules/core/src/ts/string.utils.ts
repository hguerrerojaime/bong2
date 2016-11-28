
export class StringUtils {
    
    public static isUpperCase(c:string):boolean {
        return c == c.toUpperCase();
    }
    
    public static getResourceNameFromClass(clazz:any):string {
        
        let className:string =  typeof clazz === "string"  ? clazz : clazz.name;
        let result:string = "";
        let firstRun:boolean = true;

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
    
    public static random(size:number = 10) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < size; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
    
}