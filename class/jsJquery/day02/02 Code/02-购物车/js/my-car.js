$('.checkall').change(function () { 
  $('.j-checkbox, .checkall').prop('checked',$(this).prop('checked'));
  
});

$('.j-checkbox').change(function () { 

  if($('.j-checkbox:checked').length === $('.j-checkbox').length){
    $('.checkall').prop('checked',true);

  }else{
    $('.checkall').prop('checked',false);
  }
  console.log(($('.j-checkbox:checked')));    
});

//! 3. 增减商品的数量
$('.increment').click(function(){
  var n = $(this).siblings('.itxt').val();
  n++;
  $(this).siblings('.itxt').val(n)

  //! 4. 计算一行的小计  数量* 单价 = 小计
  console.log($(this));
  // console.log($(this).parents('.p-num'));
  console.log($(this).parent().parent());

  var p = $(this).parents('.p-num').siblings('.p-price').html();
  p = p.substring(1);  //从索引为1开始，截取到最后
  // 计算小计 保留两位小数
  var price = (p * n).toFixed(2);
  // 把计算的值，设置给小计
  $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);

  getSum();
})

$('.decrement').click(function(){
  var n = $(this).siblings('.itxt').val();
  if(n == 1)return;
  n--;
  $(this).siblings('.itxt').val(n);

  var p = $(this).parents('.p-num').siblings('.p-price').html();
  p = p.substring(1);  //从索引为1开始，截取到最后
  // 计算小计 保留两位小数
  var price = (p * n).toFixed(2);
  // 把计算的值，设置给小计
  $(this).parents('.p-num').siblings('.p-sum').html('￥' + price)
  getSum();
})


//! 5. 用户修改input框的值  重新计算 小计

$('.itxt').change(function(){
  var n = $(this).val();
  console.log(n);
  var p = $(this).parents('.p-num').siblings('.p-price').html();

  p = p.substring(1); // 从索引为1开始， 截取到最后

  var price = (p * n).toFixed(2);
  $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
  getSum();
})

//! 6. 计算总计 和 总价格模块
function getSum() {
  var count = 0;  //计算总件数
  var money = 0;
  $('.itxt').each(function(i, domEle){
    console.log(domEle);
    count += parseInt($(domEle).val())
  })

  // 计算总金额
  $('.p-sum').each(function(i,domEle){
    money += parseFloat($(domEle).html().substring(1));
  })
  $('.amount-sum em').html(count);
  $('.price-sum em').html('￥' + money.toFixed(2));
  
}

getSum();

//! 7. 删除商品模块

$('.p-action a').click(function () { 
  $(this).parents('.cart-item').remove();
  getSum();
  
});

$('.remove-batch').click(function () { 
  $('.j-checkbox:checked').parents('.cart-item').remove();
  getSum();
  
});

$('.clear-all').click(function () { 
  $('.cart-item').remove();
  getSum();
  
});
