// 语法糖： 简单的写法 ，换了一种方式，本质上一样

// var obj = {}         // 是他的 var obj = new Object() 语法糖
// var arr = []        // 是他的 var arr = new Array() 语法糖

// ! 1. 所有的应用类型(对象，数组，函数)，都具有对象的特殊特性，可以自由扩展属性

var obj = {}   //  obj.a = 1;
var arr = []   //  arr.b = 2; 

var fn = function() {}  // fn.c = 3


// ! 2. 所有的对象，都有一个__proto__属性,属性值是一个普通的对象.
// __proto__也叫隐式原型  ==》 [[prototype]]

console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);

// ! 3.所有的函数，都有一个prototype 属性，属性值也是一个普通的对象。

prototype//又叫显示原型


// ! 4. 所有对象的隐式原型(__proto__), 指向他的构造函数的显示原型(prototype)


// ! 5. 当试图得到一个对象某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__ 中寻找

function Star(name, age) {
  this.name = name;
  this.age = age;
  this.sing = function(){
    console.log('sing');
    
  }
}

// 给构造函数的显示原型添加了一个sex属性
// 我们在原型对象上添加了一个sex属性

Star.prototype.sex = 'male';

var lhq = new Star('刘德华',18);
console.log(lhq.sex);

lhq.__proto__ === Star.prototype