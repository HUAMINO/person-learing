// 动态生成表格思路:
// 1. 我们先遍历datas, 根据我们数据的length长度, 即有多少人,创建多少行.可以结合console.table看
// 2. 在创建好的每个tr中, 创建列(td), 也就是单元格, 单元格的数量 取决于每个对象的属性有多少
// 3. 创建最后的删除单元格
// 4. 实现删除功能
// 在tbody里面删除tr, 因为我们点击的是a标签, 它的父级是td, 我们要删除tr,
// 所以要往上取  this.parentNode.parentNode
// ! 准备数据
var datas = [{
    name: '魏璎珞',
    subject: 'JavaScript',
    score: 100
}, {
    name: '弘历',
    subject: 'JavaScript',
    score: 98
}, {
    name: '傅恒',
    subject: 'JavaScript',
    score: 99
}, {
    name: '明玉',
    subject: 'JavaScript',
    score: 88
}, {
    name: '大猪蹄子',
    subject: 'JavaScript',
    score: 0
}];

console.table(datas)



