(function (window) {
    var zepto ={}
//1.
    var $= function (selector) {
        return zepto.init(selector)
    }
//2
    zepto.init=function(selector){
        //源码中处理了比较复杂的情况，
        var slice = Array.protoType.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom,selector)
    }
//3
    zepto.Z= function (dom,selector) {
        return new Z(dom,selector)
    }
//4
    function Z(dom,selector) {
        var i,len=dom?dom.length:0
        for (i=0;i<len;i++){
            this[i]=dom[i]
        }
        this.length = len
        this.selector = selector||''
    }
//5
    zepto.Z.prototype = Z.prototype = $.fn
    $.fn={
        constructor:zepto.Z,
        css:function (key,value) {

        },
        html:function(value){}
    }
    window.$= $

})(window)


