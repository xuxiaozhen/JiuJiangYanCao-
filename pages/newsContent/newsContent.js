import { ARTICLEINFO } from '../../utils/path.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleMsg: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.request({
      url: ARTICLEINFO,
      data: {
        articleid: e.articleid
      },
      success: res => {
        this.setData({
          articleMsg: res.data.data
        })
        console.log(this.data.articleMsg)
      },
      fail: () => {
        wx.showToast({
          title: '服务器正忙，请稍后再试',
          icon: 'none',
        })
      }
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