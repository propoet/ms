
(function (window) {
    var jQuery = function (selector) {
        return new jQuery.fn.init(selector)
    }
//定义构造函数
    var init =jQuery.fn.init =  function (selector) {
        var slice = Array.protoType.slice
        var dom = slice.call(document.querySelectorAll(selector))

        var i,len=dom?dom.length:0
        for (i=0;i<len;i++){
            this[i]=dom[i]
        }
        this.length = len
        this.selector = selector||''
    }
//初始化JQuery.fn
    jQuery.fn =jQuery.prototype={
        constructor:JQuery,
        css:function (key,value) {
        },
        html:function (value) {
        }
    }
//定义原型
    init.prototype= jQuery.fn
    window.$=window
})(window)
