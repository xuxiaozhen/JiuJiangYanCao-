/* 封装一些关于请求的方法 */

// 适用于普通的GET请求
/* 
  @url: 请求路径
  @data: 请求参数
  @success: 成功回调
  @fail: 失败回调
 */
export const requestAboutNews = function (url, data, success, fail) {
  // 加载动画
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: url,
    data: data,
    success(res) {
      wx.hideLoading()
      success(res)
    },
    fail(res) {
      wx.hideLoading()
      fail(res)
    }
  })
}


// 封装的POST请求的方法
export const requestWithPost = function (url, data, success, fail) {
  // 加载动画
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    header: { "Content-Type": "application/x-www-form-urlencoded" },
    success(res) {
      wx.hideLoading()
      success(res)
    },
    fail(res) {
      wx.hideLoading()
      fail(res)
    }
  })
}