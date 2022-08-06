// 小括号包含完整的function(){}() 刚讲的第一种写法
(function flexible(window, document) {
    // flexible.js 就是实时监听我们页面的大小,动态修改html根元素的字体大小

    // 获取 html 根元素
    var docEl = document.documentElement
    
    // dpr 物理像素比, 是物理像素与逻辑像素的比 (DevicePixelRatio  [ˈreɪʃioʊ])
    // 物理像素: 设备分辨率, 硬件真实存在的像素点
    // 逻辑像素(咱们的css像素)：document.documentElement.clientWidth
    // 可查看 移动端html --> 375 iphone6
    var dpr = window.devicePixelRatio || 1

    //! 1. adjust body font size  设置我们 body 的字体大小
    function setBodyFontSize() {
        // 如果页面中有body 这个元素 就设置body的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body 这个元素，则等着 我们页面主要的DOM元素加载完毕再去设置body
            // 的字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    //! 2. set 1rem = viewWidth / 10  设置我们html元素的字体大小, 即设置rem的基本单位像素
    // rem是相对单位，是相对html根元素。
    // 通过它既可以做到只修改根元素就成比例地调整所有字体大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    //! 3.当页面尺寸变化时, 重新设置rem
    // reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，要重新设置下rem 的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 重新加载页面触发的事件 load事件 看视频
        // pageshow 兼容火狐  load
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    //! 4.兼容0.5px处理 
    // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        // https://zhuanlan.zhihu.com/p/371898337
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            // 真正生效的是hairlines这个样式
            // 无法兼容安卓设备、 iOS 8 以下设备 // 2014
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))

//flexible作用:  我们可以用flexible 配合rem来做页面自适应.