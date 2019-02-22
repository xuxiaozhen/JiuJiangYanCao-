var wxCharts = require('../../utils/wxcharts-min.js');
var app = getApp();
var columnChart = null;
var chartData = {
  main: {
    title: '总成交量',
    data: [15, 20, 45],
    categories: ['活动', '学习', '考试']
  }
};
Page({
  data: {
    chartTitle: '总成交量',
    isMainChartDisplay: true,
    winHeight: "",  //窗口高度
    currentTab: 0,  //预设当前项的值
    scrollLeft: 0   //tab标题的滚动条位置
  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  backToMainChart: function () {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: chartData.main.categories,
      series: [{
        name: '成交量',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }]
    });
  },
  // touchHandler: function (e) {
  //   var index = columnChart.getCurrentDataIndex(e);
  //   if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
  //     this.setData({
  //       chartTitle: chartData.sub[index].title,
  //       isMainChartDisplay: false
  //     });
  //     columnChart.updateData({
  //       categories: chartData.sub[index].categories,
  //       series: [{
  //         name: '成交量',
  //         data: chartData.sub[index].data,
  //         format: function (val, name) {
  //           return val.toFixed(2) + '万';
  //         }
  //       }]
  //     });

  //   }
  // },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        },
        title: '党员考评合格率',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 35
        }
      },
      width: windowWidth,
      height: 200,
    });
  }
});