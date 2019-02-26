Page({
  data: {
    iconSize: [20],
    iconColor: [
      'icons/img1.png'
    ],
    iconType: [
      'success', 
    ],
    
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  onLoad: function(e) {
    console.log(wx.getStorageInfoSync())
  },
  //事件处理函数
  //通知公告
  bindViewTap: function () {
    wx.reLaunch({
      url: '../../pages/notice/notice'
    })
  },
  //三会一课
  bindViewTap3: function () {
    wx.navigateTo({
      url: '../../pages/threeLessons/threeLessons'
    })
  },
  //微党课
  bindViewTap1: function () {
    wx.reLaunch({
      url: '../partySchool/partySchool'
    })
  },
//党建要闻
  bindViewTap2: function () {
    wx.reLaunch({
      url: '../news/news'
    })
  }, 
  bindViewTapThree: function () {
    wx.reLaunch({
      url: '../threeLessons/threeLessons'
    })
  }, 
  bindViewTapMen: function () {
    wx.navigateTo({
      url: '../partyMen/partyMen'
    })
  },
  bindViewTapNote: function () {
    wx.navigateTo({
      url: '../newsContent/newsContent'
    })
  },
  //专题教育
  bindViewTapTopic: function () {
    wx.navigateTo({
      url: '../topicEducation/topicEducation'
    })
  },
  //党员档案
  bindViewTapvideos: function() {
    wx.navigateTo({
      url: '../videosContent/videosContent'
    })
  },
  //我的积分
  bindViewTapmyIntegral: function () {
    wx.navigateTo({
      url: '../myIntegral/myIntegral'
    })
  },
  //入党纪念
  bindViewTapcommemorate: function () {
    wx.navigateTo({
      url: '../commemorate/commemorate'
    })
  },

  //党费缴纳
  bindViewTappartyMoney: function () {
    wx.navigateTo({
      url:'../partyMoney/partyMoney'
    })
  },
  //任务管理
  bindViewTaptaskManagement: function () {
    wx.navigateTo({
      url: '../partyMoney/partyMoney'
    })
  },
  bindViewTapTest: function () {
    wx.reLaunch({
      url: '../OnlineTest/OnlineTest'
    })
  }, 
  bindViewTapMore: function () {
    wx.navigateTo({
      url: '../MoreTabs/MoreTabs'
    })
  }, 
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
