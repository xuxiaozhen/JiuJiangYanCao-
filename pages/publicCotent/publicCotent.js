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
        articleid: e.id
      },
      success: res => {
        this.setData({
          articleMsg: res.data.data
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})