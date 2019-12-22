var iframe = document.createElement('iframe')
iframe.style.display= 'none'
iframe.src= 'wexin://dl/scan'
var body = document.body||document.getElementsByTagName('body')[0]
body.append(iframe)
setTimeout(function(){
    body.removeChild(iframe)
    iframe = null
})

/*如果要加上参数和callback 那就要这么写*/
window['_weixin_scan_callback']=function (result) {
    alert(result)
}
//。。。省略。。。
iframe.src='weixin://dl/scan?k1=v1&k2=v2&callback=_weixin_scan_callback'
