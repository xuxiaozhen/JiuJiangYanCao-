// pages/changePassword/changePassword.js
var app=getApp();//获取appid
var rand=require('../../utils/random.js');//获取随机数
var sign=require('../../utils/sign.js');//获取签名
Page({
  data:{
    userName:"",
    oldPwd:"",
    newPwd:""
  },
  onLoad:function(options){
    this.setData({userName:options.userName});
  },
  getOldPwd:function(e){
  this.setData({oldPwd:e.detail.value});
  },
  getNewPwd:function(e){
    this.setData({newPwd:e.detail.value});
  },
  changePwd:function(){//密码修改
   
        var username=this.data.userName;//用户名
        var origPwd=this.data.oldPwd;
        var newPwd=this.data.newPwd;
        var appId=app.globalData.appId;//appid;
        var nonce_str=rand.getRand();//获取随机数
        var email="";
        var sessionKey = wx.getStorageSync('sessionKey');
        var postParams=[];//签名数组
        postParams[0]=["username",username];
        postParams[1]=["origPwd",origPwd];
        postParams[2]=["newPwd",newPwd];
        postParams[3]=["appId",appId];
        postParams[4]=["nonce_str",nonce_str];
        postParams[5]=["email",email];
        postParams[6] = ["sessionKey", sessionKey];
        var signVal = sign.createSign(postParams, app.globalDataComment.appKey);//签名    
        var change_Url = app.globalDataComment.url + "/user/pwd?username=" + username + "&appId=" + appId + "&nonce_str=" + nonce_str + "&sign=" + signVal + "&origPwd=" + origPwd + "&newPwd=" + newPwd + "&email=" + email + "&sessionKey=" + sessionKey;
        var self=this;
console.log(change_Url)
          wx.request({
            url: change_Url,
            data: {},
            method: 'POST', 
            success: function(res){
              if(res.data.message=="origin password invalid"){
                 wx.showModal({
                 title: '修改提示',
                 content: '您的旧密码不正确',
                 success: function(res) {
                 if (res.confirm) {
                    self.setData({
                      oldPwd:"",
                      newPwd:""
                    })
                   }
                 }
                 })
              }else if(res.data.code==204){
                wx.showModal({
                  title: '修改提示',
                  content: '参数错误',
                  success: function (res) {
                    if (res.confirm) {
                      self.setData({
                        oldPwd: "",
                        newPwd: ""
                      })
                    }
                  }
                })
              }
            if(res.data.code==200){
                   wx.showToast({
                     title:"密码修改成功！",
                     icon:"success"
                   });
                   wx.removeStorageSync('sessionKey');
                   wx.removeStorageSync('userName');
                   wx.redirectTo({url:"../login/login"});
            }
            }
          })
  }
})