import { ABOUTPARTY } from '../../utils/path.js'
import { requestAboutNews } from '../../utils/request.js'

var app = getApp();
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 1, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

    importantNewsList: [],  // 党建要闻数据列表
    noticeList: [],   // 通知公告数据列表
    placardList: [],  // 党内告示数据列表
    partyHumanList: []  // 党史人物数据列表

  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();

    // 根据不同的"currentTab"，来发出不同type的请求
    if (this.data.currentTab == 0) {
      // 党建要闻请求
      if (this.data.importantNewsList.length === 0) {
        wx.request({
          url: ABOUTPARTY,
          data: {
            programa: 1
          },
          success: res => {
            this.setData({
              importantNewsList: res.data.list
            })
            console.log(this.data.importantNewsList)
          }
        })
      }
    } else if (this.data.currentTab == 2) {
      // 党内公示请求
      if (this.data.placardList.length === 0) {
        wx.request({
          url: ABOUTPARTY,
          data: {
            programa: 3
          },
          success: res => {
            this.setData({
              placardList: res.data.list
            })
            console.log(this.data.placardList)
          }
        })
      }
    } else if (this.data.currentTab == 3) {
      // 党史人物请求
      if (this.data.partyHumanList.length === 0) {
        wx.request({
          url: ABOUTPARTY,
          data: {
            programa: 4
          },
          success: res => {
            this.setData({
              partyHumanList: res.data.list
            })
            console.log(this.data.partyHumanList)
          }
        })
      }
    }

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
  // 跳转党内公示详情  
  placardInfo: function (e) {
    console.log(e)
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

    // 发送请求数据
    wx.request({
      url: ABOUTPARTY,
      data: {
        programa: 2
      },
      success: res => {
        this.setData({
          noticeList: res.data.list
        })
        console.log(this.data.noticeList)
      }
    })
  },
  footerTap: app.footerTap
})
