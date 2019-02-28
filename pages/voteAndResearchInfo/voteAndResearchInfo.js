// pages/voteAndResearchInfo/voteAndResearchInfo.js
import{
  POING_INFO,
  GOTOPOING
} from '../../utils/path.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
poingMsg:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (this.data.poingMsg="") {
wx.request({
  url: POING_INFO,
  data:{
    id:options.id
  },
  success: res => {
    this.setData({
      poingMsg: res.data.map
    })
    console.log(res)
  }
  
})
  // }
  },
  //参与投票
  voting: function (options) {
    wx.request({
      url: GOTOPOING,
      method: 'POST',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {
        status: options.status
      },
      success: res => {
        this.setData({
          poingMsg: res.data.map
        })
        console.log(res)
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