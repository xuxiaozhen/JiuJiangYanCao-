// pages/picturesContent/picturesContent.js
var app = getApp();
Page({
  data: {
    id: "",
    pics: {},
    imgContent: [],//imgPath,imgTitle
    upsImg: "../../icons/ups.png",
    ups: "",
    collectImg: "../../icons/collect.png",
    operate: 1,
    baseurl:app.globalData.demos
  },
  onLoad: function (options) {
    this.setData({ id: options.id });
    var self = this;
    app.showModel();
    wx.request({
      url: app.globalData.url + '/content/get',
      data: {
        https: 0,
        id: options.id,
        sessionKey: wx.getStorageSync('sessionKey'),
        appId: app.globalData.appId
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        var tmp = [];
        if (res.data.body.picArr.length > 0) {
          for (var j = 0; j < res.data.body.picArr.length; j++) {
            var pathArray = res.data.body.picArr[j].picPaths.split(",");
            var imgTitle = res.data.body.picArr[j].picDescs.split(",");
            for (var i = 0; i < pathArray.length; i++) {
              var obj = {};
              obj.imgPath = pathArray[i];//图片路径
              obj.imgTitle = imgTitle[i];//图片说明
              tmp.push(obj)
            }//图片路径切割
          }
        }
        //收藏
        if (res.data.body.hasCollect == true) {

          self.setData(
            {
              collectImg: "../../icons/collect-active.png",
              operate: 0
            })
        }
        self.setData({//数据绑定
          pics: res.data.body,
          imgContent: tmp,
          ups: res.data.body.ups
        });
        wx.hideToast();
      }
    })
  },
  getCommentList: function () {
    wx.navigateTo({
      url: '../comments/comments?id=' + this.data.id
    })
  },

  up: function () {//点赞
    var app = getApp();
    var self = this;
    var rand = require('../../utils/random.js');
    var sign = require('../../utils/sign.js');
    var id = self.data.id;//内容id
    var appId = app.globalData.appId;//appid;
    var nonce_str = rand.getRand();//获取随机数
    var sessionKey=wx.getStorageSync('sessionKey');
    var postParams = [];
    postParams[0] = ["id", id];
    postParams[1] = ["appId", appId];
    postParams[2] = ["nonce_str", nonce_str];
    postParams[3]=["sessionKey",sessionKey];
    var signVal = sign.createSign(postParams, app.globalDataComment.appKey);//签名     
    wx.request({
      url: app.globalDataComment.url + '/content/up?id=' + id + "&appId=" + appId + "&nonce_str=" + nonce_str + "&sign=" + signVal + "&sessionKey=" + sessionKey,
      data: {},
      method: 'POST',
      success: function (res) {
        if (res.data.code == 200) {
          self.setData({
            ups: self.data.ups + 1,
            upsImg: "../../icons/ups-active.png"
          });
        }else{
          setTimeout(function () {
            self.setData({
              upsImg: "../../icons/ups.png",
              ups:self.data.body.ups
            });
          }, 200)
        }
      }
    })
  },
  collect: function () {//收藏
    var app = getApp();
    var rand = require('../../utils/random.js');
    var sign = require('../../utils/sign.js');
    var operate = this.data.operate;//0取消收藏1收藏
    var id = this.data.id;//内容id
    var appId = app.globalData.appId;//appid;
    var nonce_str = rand.getRand();//获取随机数
    var sessionKey = wx.getStorageSync('sessionKey');//sessionKey
    var postParams = [];
    postParams[0] = ["id", id];
    postParams[1] = ["appId", appId];
    postParams[2] = ["nonce_str", nonce_str];
    postParams[3] = ["sessionKey", sessionKey];
    postParams[4] = ["operate", operate];
    var signVal = sign.createSign(postParams, app.globalData.appKey);//签名     

    var self = this;
    if (sessionKey == "" || sessionKey == null) {
      wx.showModal({
        title: "提示",
        content: "收藏需要登录，是否登录?",
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: "../login/login"
            })
          }
        }
      })
    } else {
      wx.request({
        url: app.globalDataCollect.url + '/content/collect',
        data: {
          id: id,
          operate: operate,
          appId: appId,
          nonce_str: nonce_str,
          sign: signVal,
          sessionKey: sessionKey
        },
        method: 'GET',

        success: function (res) {
          if (res.data.code == 200) {
            if (self.data.operate == 1) {
              self.setData({
                collectImg: "../../icons/collect-active.png",
                operate: 0
              })
            } else {
              self.setData({
                collectImg: "../../icons/collect.png",
                operate: 1
              })
            }
          }
        }
      })
    }
  }
})