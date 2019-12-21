//类似promise写法
var ajax = $.ajax('data.json')
/*
ajax.then(function () {
    console.log('success1')
},function(){
    console.log('err1')
}).then(function () {
  console.log('success2')
},function () {
    console.log('err2')
})
*/
ajax.done(function () {
    console.log('success1')
}).fail(function(){
    console.log('fail1')
}).done(function () {
    console.log('success2')
}).fail(function(){
    console.log('fail2')
})



//
var wait = function(){
    var task = function(){
        console.log('执行完成')
    }
    setTimeout(task,2000)
}
wait()
// 新需求：需要执行完成之后进行某些特别复杂的操作

function waitHandle(){
    var dtd = $.Deferred() //创建一个deferred对象
    var wait =function(dtd){
        var task =function(){
            console.log('执行完成')
            dtd.resolve() //表示异步任务已经完成
            //dtd.reject() // 表示异步任务失败或出错
        }
        setTimeout(task,2000)
        return dtd.promise() //要求返回deferred对象
    }

    return wait(dtd)
}

var w = waitHandle()
w.then(function(){console.log('success1')},function(){console.log('error1')})
