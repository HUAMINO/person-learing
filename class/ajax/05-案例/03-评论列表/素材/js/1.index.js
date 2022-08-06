axios.defaults.baseURL = 'http://ajax-base-api-t.itheima.net';
function getCommit(){
    axios({
        method: 'get',
        url: '/api/cmtlist'
    })
    
    .then(res => {
        let new_arr = res.data.data.map(item => {
            return `
            <li class="list-group-item" data-id='${item.id}'>
            <span class="badge" style="background-color: #f0ad4e">评论时间：${item.time}</span>
            <span class="badge" style="background-color: #5bc0de">评论人：${item.username}</span>
            <button id = 'del'>删除</button>
            ${item.content}
          </li>`
        })
        document.querySelector('#cmt-list').innerHTML = new_arr.join('')
    })
}
getCommit();




// 发表评论
var btn = document.querySelector('#formAddCmt');
var input = document.querySelectorAll('.form-control');

// input[0].addEventListener('blur',function(){

// })
btn.addEventListener('submit', function(e) {
    
    e.preventDefault();
    axios({
        method: 'POST',
        url: '/api/addcmt',
        data:{
            username: input[0].value,
            content: input[1].value,
        }
    })

    .then(res => {
        getCommit();
    })
    .catch(res=>{
        console.log('ddd');
    })
})

// 删除
let ul =  document.querySelector('#cmt-list');

ul.addEventListener('click',function(e){
    console.log(e.target.parentNode.dataset.id);
    axios({
        method: 'get',
        url: '/api/delcmt',
        params: {
          id: e.target.parentNode.dataset.id,
        }
      
    }) 
    .then(res => {
        getCommit();
    })
})



