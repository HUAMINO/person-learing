//! 1. 获取元素

var preview_img = document.querySelector('.preview_img');

var mask = document.querySelector('.mask');

/* 右侧大盒子 */
var big_box = document.querySelector('.big');

preview_img.addEventListener('mouseover',function(){
  mask.style.display = 'block';
  big_box.style.display = 'block';

})

preview_img.addEventListener('mouseout',function(){
  mask.style.display = 'none';
  big_box.style.display = 'none';

})

preview_img.addEventListener('mousemove',function(e){
  var x = e.pageX -this.offsetLeft;
  var y = e.pageY - this.offsetTop;
  var maskX = x - mask.offsetWidth / 2;
  var maskY = y - mask.offsetWidth / 2;


  mask.style.left = maskX  + 'px';

  mask.style.top = maskY  + 'px';

  var  maskMax = preview_img.offsetWidth - mask.offsetWidth
  if(maskX <= 0 ){
    maskX = 0;

  }else if(maskX>= maskMax){
    maskX = maskMax
  }


  if(maskY  <= 0){
    maskY = 0;
  }else if(maskY >= maskMax){
    maskY = maskMax

  }
  mask.style.left = maskX + 'px'
  mask.style.top = maskY + 'px'
  /* 公式：遮罩层移动的距离 / 遮罩层的最大移动距离 = 大图片的 */
  var big_img = document.querySelector('.bigImg');

  var bigMax = big_img.offsetWidth - big_box.offsetWidth;

  var bigX = maskX * bigMax / maskMax;
  var bigY = maskY * bigMax / maskMax;
  big_img.style.left = -bigX + 'px';
  big_img.style.top = -bigY + 'px';
})



