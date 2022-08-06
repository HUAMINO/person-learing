function animate(obj, target,callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function(){
      var step = (target - obj.offsetLeft) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      /* 当到达指定的位置 */
      if (obj.offsetLeft == target){
          /* 应为每次点击都会被调用,所以需要清楚定时器 */
          clearInterval(obj.timer);
          /* 判断这个函数是否存在如果不存在则不调用 */
          // 普通写法
          /* if(callback){
                callback(); 
          } */
          callback&&callback(); 
      }
      obj.style.left = obj.offsetLeft + step + 'px'
  }, 15)

}