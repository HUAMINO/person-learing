// ! 1. 监控区域tab切换

$('.monitor .tabs').on('click','a',function(){
  $(this).addClass('active').siblings('a').removeClass('active');
  // 获取点击a标签的索引号，找到对应的div 让他显示。
  var index = $(this).index();

  $('.monitor .content').eq(index).show().siblings('.content').hide();


})
// 克隆marquee里面所有的行 row，两个content，每一个都要克隆一份

$('.marquee-view .marquee').each(function(){
  var rows = $(this).children().clone()
  $(this).append(rows);
})

// 点位分布统计模块
;(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie"));
  // 2. 指定配置项和数据
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 6,
          // 连接到文字的线长度
          length2: 8
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

;(function(){
  var myChart = echarts.init(document.querySelector(".bar"));

  var  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: '#a90000'
            }
          },
          150,
          80,
          70,
          110,
          130
        ],
        type: 'bar',
  
      }
    ],
    //提示框组件
    tooltip: {
      trigger: 'item',
    // axisPointer: {            // 坐标轴指示器，坐标轴触发有效  这个模块我们此时不需要删掉即可
        // type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    // }
    },
    // 直角坐标系内绘图网格（区域）
    grid: {
      top: '3%',
      right: '3%',
      bottom: '3%',
      left: '0%',
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      //grid 四条边框的颜色
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    // 修改线性渐变色方式 1
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0, 0, 0, 1,
      [
           { offset: 0, color: '#00fffb' }, // 0 起始颜色
           { offset: 1, color: '#0061ce' }  // 1 结束颜色
     ]
  ),
    
  };
  myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });

  
})()
