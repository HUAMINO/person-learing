axios({
    method: 'get',
    url: 'http://ajax-base-api-t.itheima.net/api/news'
})

.then(res => {
    console.log(res);
    let new_arr = res.data.data.map(item => {
        let tags_arr = item.tags.split(',');
        tags_arr.map(item=>{
            return '<span>' + item + '</span>'
        })
        
        return `
            <div class="news-item">
            <img
            class="thumb"
            src="http://www.liulongbin.top:3006${item.img}"
            alt=""
            />
            <div class="right-box">
            <h1 class="title">
              ${item.title}
            </h1>
            <div class="tags">
                ${tags_arr.join('  ')}
            </div>
            <div class="footer">
                <div>
                <span>${item.source}</span>
                &nbsp;&nbsp;
                <span>${item.time}</span>
                </div>
                <span>评论数：${item.cmtcount}</span>
            </div>
            </div>
        </div>
    `
    })
    document.querySelector("#news-list").innerHTML = new_arr;
})