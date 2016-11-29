interface Object {
    isEmpty():boolean;
}

Object.prototype.isEmpty = () => {
    return Object.keys(this).length === 0 && this.constructor === Object
}