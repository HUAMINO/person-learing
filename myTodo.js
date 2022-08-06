//! 2.封装一个获取本地localStorage数据的函数
var getLocal = function() {
  var res = localStorage.getItem('todo_list');
    if(res){
      return JSON.parse(res);// 转换成对象
    }else {
      return [];
    }

}
    
//! 封装一个存储到本地local的一个函数
// 这个函数接收我们要存的数据

var setLocal = function (data) { 
    localStorage.setItem('todo_list',JSON.stringify(data))
 }
 

//! 4. 从本地localStorage中,取出数据，封装一个渲染的数据
var renderList = function() {
  var res = getLocal();
  console.log(res);
  // 每次渲染数据之前,先清空页面中的数据
  $('ol,ul').html('');

//! 7.统计个数
	var todoCount = 0;
	var doneCount = 0;


  $.each(res, function (i, el) { 
    console.log(el);
    // 表示已经完成
    if(el.done){
		doneCount++;
      $('ul').prepend(`<li><input type="checkbox" checked><p>${el.title}</p> <a href="javascript:;" id="${i}"></a></li>`)

    }else{
		todoCount++
      // 表示正在进行
      $('ol').prepend(`<li><input type="checkbox"><p>${el.title}</p> <a href="javascript:;" id="${i}"></a></li>`)

    }
  
  });
  $('#todocount').html(todoCount)
  $('#donecount').html(doneCount)

  

}

  renderList();

//! 1. 按下回车，发布一条todo
$('#title').on('keydown',function(e){
  if(e.keyCode === 13){
    if($('#title').val() === ''){
      alert('请输入内容')
      return
    }

    var res = getLocal();
    // 2. 修改数据
    var temp = {
      title: $('#title').val(),
      done:false
    }
    res.push(temp);
    // 3.存数据
    setLocal(res);
    // 4.渲染数据

    renderList();
  }
})

//!  5.点击右侧小圆圈,删除一条数据
$('ol,ul').on('click','a',function(){
  var res = getLocal();

  var index = $(this).attr('id');
  res.splice(index,1);
  setLocal(res);
  renderList();
})

//! 6.点击复选框 ，判断状态 ，如果为true 放到已完成的

// 1. 先获取本地local数据

// 2. 修改数据 修改done 值，true or false
// 3. 再把修改后的数据，放到本地 存起来 setLocal(res)

$('ul,ol').on('click','input',function(){
	var resArr = getLocal();

	var index = $(this).siblings('a').attr('id');
	resArr[index].done = $(this).prop('checked');
	console.log(resArr);
	setLocal(resArr);
	renderList();
})