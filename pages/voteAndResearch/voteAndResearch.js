// pages/voteAndResearch/voteAndResearch.js
import{POLING} from '../../utils/path.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //投票调研数据列表
polingList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    if (this.data.polingList.length === 0) {
wx.request({
  url: POLING,
  data:{
    currentPage:1,
    pageRecord:10
  },
  success: res => {
    this.setData({
      polingList: res.data.list
    })
    console.log(this.data.polingList)
  }
})
  }
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