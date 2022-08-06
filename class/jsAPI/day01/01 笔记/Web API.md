JS的组成：ECMAScript  DOM  BOM   

API ： application programming interface .  应用程序编程接口 。 接口， 是一个工具， 或者说方法。可以实现我们的一些功能， 我们不需要了解它的内部实现。 alert(), prompt()

Web API : (BOM + DOM)  , 浏览器接口。 浏览器提供给我们的 操作页面元素（DOM）和 操作浏览器功能（BOM） 的接口。

DOM ： document object model . 文档对象模型。 把我们的页面当做一个对象。

DOM树： DOM树是一种层级结构， 代表了节点之间的一些关系， 父子，兄弟关系等。

文档： 一个页面就是一个文档。 document

元素： 所有的标签都是元素。  p , h1 , a， div html。

节点： 页面上所有的内容都叫节点 。 元素节点， 文本节点，属性节点，注释节点。



### 获取元素

1. 通过ID获取元素  document.getElementById()   
   1.  不需要传入#号
   2. 获取一个元素
2. 根据标签名获取元素  document.getElementsByTagName('标签名') 
   1. 获取到的是一堆， 元素集合， 是伪数组。

H5 提供三种方式获取元素

1. 通过类名 获取元素  document.getElementsByClassName('类名')
   1. 不需要传入  . 
   2. 获取到的是也是伪数组， 一堆元素集合
   3. 伪数组： 有索引，有length， 没有数组的方法， 可以遍历。
2. 通过选择器获取元素  document.querySelector() 
   1. 需要传入 `#， .  标签名`
   2. 获取到的是第一个元素
3. 选择器 获取所有的元素集合  document.querySelectorAll()
   1. 需要传入 `#, . , 标签名`
   2. 获取到的是一个伪数组

特殊元素的获取

	- body :  document.body
	- html :   document.documentElement



---

markdown 语法： 

## 标题：

h1   `# 标题`

h2 `## 标题h2`

h3  `### h3`

typora上面的快捷键：

 windows ctrl+数字键   `ctrl+2`  h2 标题 

 mac    `cmd+ 2`    h2 标题

## 序列

`1. ` 数字加. 空格 ， 再写内容。

```js
1. 内容 
2. 序列2
3. 序列3
```

无序 序列

`- 内容` ， 短横线 空格 加内容

- 哈哈哈
- 啦啦啦啦
- 无序序列

```js
- 内容
- 无序序列
- 无序序列
```

### 代码块

````js
``` 反引号,  左上角反引号。

```js
function fn() {}
```
````

### 小的代码块

`哈哈哈`

```js
`我是小块代码`   键盘左上角  `fn`
```

