class Product {
  constructor (name) {
    this.name=name
  }
  init(){
    alert('init')
  }
  fn1(){
    alert('fn1')
  }
}
class Creator{
  create(name){
    return new Product(name)
  }
}
let creator=new Creator()

let product = creator.create('ss');
product.init()
product.fn1()
