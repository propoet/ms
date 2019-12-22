var a ={
    tag:'ul',
    attrs:{
        id:'list'
    },
    children:[
        {
            tag:'li',
            attrs:{className:'item'},
            children:['Item 1']
        },
        {
            tag:'li',
            attrs:{className:'item'},
            children:['Item 2']
        }
    ]
}

// vdom 函数 patch函数
var vnode = h('ul#list',{},[
    h('li.item',{},'Item 1'),
    h('li.item',{},'Item 2')
])
//
var container = document.getElementById('container')
patch(container,vnode)// 进行对比
// 模拟改变
var btnChange= document.getElementById('btn-change')
btnChange.addEventListener('click',function(){
    var newVnode = h('ul#list',{},[
        h('li.item',{},'Item 1'),
        h('li.item',{},'Item 2'),
        h('li.item',{},'Item 3')
    ])
    patch(vnode,newVnode)
})


function createElement(vnode){
    var tag = vnode.tag
    var attrs = vnode.attrs||{}
    var children = vnode.children||[]
    if(!tag){
        return null
    }
//    创建元素
    var elem = document.createElement(tag)
    //属性
    var attrName
    for (attrName in attrs){
        if(attrs.hasOwnProperty(attrName)){
            elem.setAttribute(attrName,attrs[attrName])
        }
    }
    // 子元素
    children.forEach(function(childrenVnode){
        elem.appendChild(createElement(childrenVnode))
    })
    return elem
}

function updateChildren(vnode,newVnode){
    var children = vnode.children||[]
    var newChildren = newVnode.children||[]
    //遍历现有的children
    children.forEach(function(child,index){
        var newChild = newChildren[index]
        if(newChild==null){
            return
        }
        if(child.tag===newChild.tag){
            //两者一样
            updateChildren(child,newChild)
        }else{
            //两者tag不一样
            replaceNode(child,newChild)
        }
    })
}


/*var obj = {
    name:'zhangsan'
    ,age:25
}
console.log(obj.name)//
obj.age=26*/
var obj = {}
var name = 'zhangsan'
Object.defineProperty(obj,'name',{
    get:function () {
        console.log('get')
        return name
    },
    set:function(newVal){
        console.log('set')
        name = newVal
    }
})
console.log(obj.name) //可以监听到
obj.name= 'lisi' // 可以监听到

var vm = {}
var data = {
    price:100,
    name:'zhangsan'
}
var key,value
for(key in data){
    //命中闭包，新建一个函数，保证key的独立的作用域
    (function(key){
        Object.defineProperty(vm,key,{
            get:function(){
                console.log('get')
                return data[key]
            },
            set:function(newValue){
                console.log('set')
                data[key]=newValue
            }
        })
    })(key)
}


//with用法
var obj = {
    name:'zhangsan',
    age:20,
    getAddress:function(){
        alert('bj')
    }
}
function fn(){
    with(obj){
        alert(name)
        alert(age)
        getAddress()
    }
}
fn()


with(this){
    return _c(
        'div',
        {
            attrs:{"id":"app"}
        },
        [_c('p',[_v(_s(price))])]
    )
}
