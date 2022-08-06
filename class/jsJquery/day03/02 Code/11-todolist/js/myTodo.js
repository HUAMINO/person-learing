//!封装一个获取本地储存的数据
var getLocal = function (){
  var res =	localStorage.getItem('todo_list')
	if(res){
		return JSON.parse(res)//将其转换为对象
	}else{
		return [];
	}

}

//! 封装存储一到本地local的一个函数
var setLocal = function (data){
	localStorage.setItem('todo_list',JSON.stringify(data))

}


//! 从本地localStorage中取出数据，封装一个渲染的数据
var renderList = function(){
	var ul = document.querySelector('ul');
    var ol = document.querySelector('ol');
	var res = getLocal();
			ul.innerHTML = '';
			ol.innerHTML = '';
	// console.log(res);

	for(var i =0; i < res.length; i++){
		var li = document.createElement('li');
		if(res[i].done){
			li.innerHTML = `<input type="checkbox"><p>${res[i].title}</p> <a href="javascript:;" id="${i}"></a>`		
		    ul.appendChild(li)
		}else{
			li.innerHTML = `<input type="checkbox"><p>${res[i].title}</p> <a href="javascript:;" id="${i}"></a>`		
		    ol.appendChild(li)
		}
	
	}

	
}

renderList();
//! 第一步按下enter
var title = document.querySelector('input');

//  获得ul 和ol 的数据




title.addEventListener('keydown',function(e){
	if(e.code === 'Enter'){
		if(title.value === ''){
			alert('请输入内容')
			return
		}
		var res = getLocal();
	var temp = {
		title: title.value,
		done: false
	}
	res.push(temp);
	setLocal(res);
	renderList();
	}

})


