class Jquery{
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i <length; i++) {
            this[i]= result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index){
        return this[index]
    }
    each(fn){
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type,fn){
        return this.each(elem=>{
            elem.addEventListener(type,fn)
        })
    }
}

// 插件
Jquery.prototype.dialog=function (info) {

}
// 扩展
class MyJquery extends Jquery{
    constructor(selector) {
        super(selector);
    }
}