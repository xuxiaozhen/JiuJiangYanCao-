import { LOGIN } from '../../utils/path.js'

Page({
  data: {
    username: '',  // 用户名
    password: ''   // 密码
  },

  // 登录
  login: function() {
    let username = this.data.username
    let pwd = this.data.password
    //进行账号密码的基本判空验证
    if(username !== '' || pwd !== '') {
          // 判空验证通过后发送登录请求
          wx.request({
            url: LOGIN,
            data: {
              wechat: username,
              password: pwd
            },
            header: {'content-type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            success: function (res) {
              // 发送请求成功，但是用户名或密码错误
              if (res.data.success === false || res.statusCode !== 200) {
                // 弹窗提示(返回状态码为false)
                wx.showToast({
                  title: '用户名或密码错误',
                  icon: "none"
                })
                
              } else {
                // 登录成功————将用户基本信息保存到Storage
                wx.setStorage({
                  key: 'userInfo',
                  data: res.data.user
                })
                // 发送请求成功，用户名密码正确然后跳转到主页
                wx.reLaunch({
                  url: '../../pages/homes/homes',
                })
              }
            },
            // 发送请求失败或是超时
            fail: function() {
              wx.showToast({
                title: '服务器繁忙，请稍后再试',
                icon: 'none'
              })
            }
          })
       } else {
      // 两个输入框无内容，弹窗警示
      wx.showToast({
        title: '用户名或密码不能为空',
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
  }
})