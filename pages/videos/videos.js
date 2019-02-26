import { TEST, ARTICLELIST } from '../../utils/path.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 测试用的数据
    data: []
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:8080/test/artleList',
      method: 'GET',
      success(res) {
        console.log(res)
      }
    })
  }
})