Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',  // 用户名
    password: ''   // 密码
  },

  // 登录
  login: function() {
    //进行账号密码的验证
    let username = this.data.username
    let pwd = this.data.password
    if(username === '' && pwd === '') {
      wx.request({
        url: 'http://192.168.11.106:80/zhyc/userManage/wxLogin?username=szzx&password=888',
        // data: {
        //   username,
        //   pwd
        // },
        method: 'GET',
        success: function(res) {
          console.log(res)
        }
      })
      // wx.showToast({
      //   title: '登录成功',
      // })
      wx.reLaunch({
        url: '../../pages/homes/homes',
      })
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: "none"
      })
    }
  },
  // 双向绑定用户名
  getUserName(e) {
    this.setData({
      username: e.detail.value
    })
  },
  // 双向绑定密码
  getPassWord(e) {
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  }
})