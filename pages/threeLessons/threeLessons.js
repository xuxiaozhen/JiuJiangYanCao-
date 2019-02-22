// pages/threeLessons/threeLessons.js
// pages/partySchool/partySchool.js
var app = getApp();
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 1, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    }]
  },
  // 滚动切换标签样式
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
  //事件处理函数
  bindtabView: function () {
    wx.navigateTo({
      url: '../../pages/meetNote/meetNote'
    })
  },
  bindtabViewSchool: function () {
    wx.reLaunch({
      url: '../../pages/partySchool/partySchool'
    })
  },
  bindViewTabTest: function () {
    wx.navigateTo({
      url: '../recruit/recruit',
    })
  },
  //事件处理函数
  bindtabView: function () {
    wx.navigateTo({
      url: '../../pages/meetNote/meetNote'
    })
  },
  bindtabViewSchool: function () {
    wx.reLaunch({
      url: '../../pages/partySchool/partySchool'
    })
  },

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
  footerTap: app.footerTap
})


 
