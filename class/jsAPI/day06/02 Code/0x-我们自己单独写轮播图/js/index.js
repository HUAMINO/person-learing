//!左右按钮的显示隐藏

var container = document.querySelector('.container');
var arrow_left = document.querySelector('.icon-arrow-left');
var arrow_right = document.querySelector('.icon-arrow-right');
// 一张图片的宽度
var boxWidth = container.offsetWidth;

var timer = setInterval(function(){
  arrow_right.click();
},2000)


container.addEventListener('mouseover',function(){
  arrow_left.style.display = 'block';
  arrow_right.style.display = 'block';
  clearInterval(timer)
})

container.addEventListener('mouseout',function(){
  arrow_left.style.display = 'none';
  arrow_right.style.display = 'none';
  timer = setInterval(function(){
    arrow_right.click();
  },2000)
})

//!2.动态创建生成小断线
var img_ul = document.querySelector('.carousel');
var lines_ul = document.querySelector('.lines');

for(var i = 0; i < img_ul.children.length; i++){
  var line = document.createElement('li');
  line.setAttribute('data-index',i)
  lines_ul.appendChild(line);
}
lines_ul.children[0].className = 'current'

//!小短纤维的排他
var num = 0;
var mark  = 0;
lines_ul.addEventListener('click',function(e){
      for(var i = 0; i <lines_ul.children.length; i++){
        if(e.target == this) return;
        lines_ul.children[i].className = '';
      }
      e.target.className = 'current';
      // e.target.dataset.
      //!4.点击小短线，让图片img移动，移动的是ul

      var index = e.target.dataset.index;
      //移动的距离是 索引 *
      num = index;
      mark = index;
      animate(img_ul,-index * boxWidth)
})

//!点击右侧按钮，让图片向左移动  重点理解：无缝滚动


//!点击右侧按钮，让小短线跟随变化。

// 

var flag = true

arrow_right.addEventListener('click',function(){
  if(flag){
    flag = false;
    if(num == img_ul.children.length - 1){
      img_ul.style.left = 0;
      num =0;
    }
    num++;
    mark++;
    if(mark == lines_ul.children.length){
      mark = 0;
    }
  
    for(var i = 0; i < lines_ul.children.length;i++){
      lines_ul.children[i].className = '';
  
    }
    lines_ul.children[mark].className = 'current';
  
  
    animate(img_ul, -num * boxWidth,function(){
      flag = true;
    })
  }
 

})

//!  克隆第一张图片，放到img_ul最后
var first_img = img_ul.children[0].cloneNode(true);
img_ul.appendChild(first_img);

arrow_left.addEventListener('click',function(){
    if(flag == true){
      flag = false
    }
    if(num == 0){
      num = img_ul.children.length - 1;
      img_ul.style.left =  -num * boxWidth + 'px';
    }
    num--;
    mark--;
    if(mark < 0){
      mark = lines_ul.children.length - 1;
    }
  
    for(var i = 0; i < lines_ul.children.length;i++){
      lines_ul.children[i].className = '';
  
    }
    lines_ul.children[mark].className = 'current';
  
    animate(img_ul, -num * boxWidth,function(){
      flag = true;
    })
})
