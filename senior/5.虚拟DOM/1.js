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
