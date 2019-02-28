Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 测试用的数据
    aboutParty: ['党员档案','入党记录','党员信息','党员详情','精准扶贫']
  },

  logout: function() {
    wx.removeStorage({
      key: 'userInfo',
      success: function(res) {
        wx.navigateTo({
          url: '../../pages/login/login',
        })
      },
    })
  },


  bindViewTapContent: function () {
    wx.navigateTo({
      url: '../../pages/videosContent/videosContent'
    })
  },
  bindViewTapCommenmorate: function () {
    wx.navigateTo({
      url: '../../pages/commemorate/commemorate'
    })
  },
  bindViewTapAssessment: function () {
    wx.navigateTo({
      url: '../../pages/assessment/assessment'
    })
  },
  bindViewTapAlbum: function () {
    wx.navigateTo({
      url: '../../pages/eventAlbum/eventAlbum'
    })
  },
  bindViewTapVote: function () {
    wx.navigateTo({
      url: '../../pages/voteAndResearch/voteAndResearch'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})