// ! 1. 显示左侧导航

// 页面被卷去的头部 $(document).scrollTop

var  boxTop = $('.recommend').offset().top;

$(window).scroll(function () { 

  if ($(document).scrollTop() >= boxTop){

    $('.fixedtool').fadeIn(300);

  }else{

    $('.fixedtool').fadeOut(300)

  }


  // !3. 页面滚动到某个区域，让对应的li添加current类名
  console.log($('.floor .w '))
    if(flag){
      $('.floor .w ').each(function(i,domEle){
        if($(document).scrollTop() >= $(domEle).offset().top){
          $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current')
        }
    
      })
    }
  
});


// ! 2 点击左侧的盒子，让内容区域滚动到相应的位置

var flag = true;
$('.fixedtool li').click(function(){
  flag = false;
  var index = $(this).index();
  console.log(index);
  var top = $('.floor .w').eq(index).offset().top

  $('html').stop().animate({
    scrollTop: top
  })
  $(this).addClass('current').siblings().removeClass('current')
})

