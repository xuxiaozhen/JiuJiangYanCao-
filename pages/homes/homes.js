
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
    nextMargin: 0,


    routers: [
      {
        name: '通知公告',
        url: '../announcement/announcement',
        icon: '../../icons/img1.png',
        code: '10'
      },
      {
        name: '微党课',
        url: '../partyLesson/partyLesson',
        icon: '../../icons/img2.png',
        code: '10'
      },
      {
        name: '三会一课',
        url: '../threeLessons/threeLessons',
        icon: '../../icons/img3.png',
        code: '10'
      },
      {
        name: '在线考试',
        url: '../OnlineTest/OnlineTest',
        icon: '../../icons/img4.png',
        code: '10'
      },
      {
        name: '党员档案',
        url: '../videosContent/videosContent',
        icon: '../../icons/img5.png',
        code: '10'
      },
      {
        name: '我的积分',
        url: '/pages/Course/course',
        icon: '../../icons/img6.png',
        code: '10'
      },
      {
        name: '入党纪念',
        url: '../commemorate/commemorate',
        icon: '../../icons/img7.png',
        code: '10'
      },
      {
        name: '党史人物',
        url: '../partyMen/partyMen',
        icon: '../../icons/img8.png',
        code: '11'
      },
      {
        name: '党建要闻',
        url: '../news/news',
        icon: '../../icons/img9.png',
        code: '10'
      },
      {
        name: '党费收缴',
        url: '../partyMoney/partyMoney',
        icon: '../../icons/img10.png',
        code: '11'
      },
      {
        name: '任务管理',
        url: '../taskManagement/taskManagement',
        icon: '../../icons/img11.png',
        code: '10'
      },
      {
        name: '专题教育',
        url: '../topicEducation/topicEducation',
        icon: '../../icons/igm12.png',
        code: '11'
      },
      {
        name: '投票调研',
        url: '../voteAndResearch/voteAndResearch',
        icon: '../../icons/img13.png',
        code: '10'
      },
      {
        name: '活动相册',
        url:'../eventAlbum/eventAlbum',
        icon: '../../icons/img14.png',
        code: '11'
      },
      {
        name: '更多',
        url: '../MoreTabs/MoreTabs',
        icon: '../../icons/img15.png',
        code: '10'
      }
    ]
    
  },
  //事件处理函数
  deleteImage: function (e) {
    var that = this;
    var view = that.data.view;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          view.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          view
        });
      }
    })
  },
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
  
  // 页面加载，判断用户登录状态
  onLoad: function (e) {
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log('欢迎登录')
      },
      fail() {
        wx.navigateTo({
          url: '../../pages/login/login',
        })
      }
    })
  },

  onShow: function() {
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log('欢迎登录')
      },
      fail() {
        wx.navigateTo({
          url: '../../pages/login/login',
        })
      }
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
