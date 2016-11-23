Array.prototype["clear"] = () => {
    this.splice(0,this.length);
};

Array.prototype["removeFrom"] = (array:any[]) => {

    this.map((item) => {
        array.splice(array.indexOf(item),1);
    });

};

Array.prototype["unique"] = () => {

    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

Array.prototype["replaceAll"] = (array:any[],regex:any,replacement:string,ignoreNull:boolean = true) => {

    if (ignoreNull && array == null) return null;
        
    let result = [];
 
    for (let item of array) {
        result.push(item.replace(regex,replacement));
    }
    
    return result;
}

Array.prototype["findFirst"] =  (filter:Function = (item) =>{}) => {

    for (let item of this) {

        if (filter(item)) {
            return item;
        }

    }

    return null;

}

export declare module array {}