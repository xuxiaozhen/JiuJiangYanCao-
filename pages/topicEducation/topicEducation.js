// 引入接口路径
import {
  ARTICLELIST,
  EDUCATION
} from '../../utils/path.js'

var app = getApp();
Page({
  data: {
    isMainChartDisplay: true,
    winHeight: "",//窗口高度
    currentTab: 2, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

    // 微党课数据列表
    partyLessonList: [],
    // 专题教育数据列表
    educationList: [],
    // 反腐倡廉数据列表
    integrityList: [],
    // 政策法规数据列表
    legislationList: [],

    currentPage: 1, // 当前页码
    totalPage: 1,  // 总页数
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

    // 根据不同的"currentTab"，来发出不同type的请求
    if (this.data.currentTab == 2) {
      // 教育专题
      if (this.data.educationList.length === 0) {
        wx.request({
          url: ARTICLELIST,
          data: {
            type: 4,
            pageIndex: 1,
          },
          success: res => {
            this.setData({
              educationList: res.data.list
            })
            console.log(this.data.educationList)
          }
        })
      }
    } else if (this.data.currentTab == 3) {
      // 反腐倡廉
      if (this.data.integrityList.length === 0) {
        wx.request({
          url: ARTICLELIST,
          data: {
            type: 5,
            pageIndex: 1,
          },
          success: res => {
            this.setData({
              integrityList: res.data.list
            })
            console.log(this.data.integrityList)
          }
        })
      }
    } else if (this.data.currentTab == 4) {
      // 政策法规
      if (this.data.legislationList.length === 0) {
        wx.request({
          url: ARTICLELIST,
          data: {
            type: 6,
            pageIndex: 1,
          },
          success: res => {
            this.setData({
              legislationList: res.data.list
            })
            console.log(this.data.legislationList)
          }
        })
      }
    }

  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
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

  // 上拉(点击按钮)列表加载更多数据
  getMore: function () {
    if (this.data.currentPage < this.data.totalPage) {
      wx.request({
        url: ARTICLELIST,
        data: {
          type: 3,
          pageIndex: this.data.currentPage + 1,
        },
        success: res => {
          let tempList = [...this.data.partyLessonList]
          for (let i = 0; i < res.data.list.length; i++) {
            tempList.push(res.data.list[i])
          }
          this.setData({
            partyLessonList: tempList,
            currentPage: this.data.currentPage += 1
          })
        }
      })
    } else {
      wx.showToast({
        title: '没有更多数据了',
        icon: 'none'
      })
    }
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

    // 调用接口接收数据
    wx.request({
      url: ARTICLELIST,
      data: {
        type: 3,
        pageIndex: 1
      },
      success: res => {
        this.setData({
          partyLessonList: res.data.list,
          currentPage: res.data.page.currentPage,
          totalPage: res.data.page.totalPage
        })
      }
    })
  },
  footerTap: app.footerTap
})
