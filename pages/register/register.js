// pages/register/register.js
var app = getApp();
var en=require('../../utils/aes.js');
var rand=require('../../utils/random.js');
var sign=require('../../utils/sign.js');
Page({
  data:{
    regInfo:{},
    only:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  formSubmit:function(e){
    console.log(e.detail.value)
    this.setData({regInfo:e.detail.value});
  },
  add:function(){
    var self=this;
    wx.request({//用户名是否唯一
      url: 'https://d2.jeecms.com/api/front/username_unique',
      data: {
        username:self.data.regInfo.username
      },
      method: 'GET', 
      success: function(res){
        self.setData({only:res.data});
          if(res.data==true){
            if(self.data.regInfo.pwd1==""||self.data.regInfo.pwd2==""){//密码是否为空
              wx.showModal({
              title:"注册信息提示",
              content:"密码不能为空",
              showCancel:false  
            })
          }else{
            if(self.data.regInfo.pwd1!=self.data.regInfo.pwd2){
              wx.showModal({//密码是否相同
              title:"注册信息提示",
              content:"两次密码不相同",
              showCancel:false  
            })   
          }else{
            if(self.data.regInfo.realname==""||self.data.regInfo.realname==null){//是否存在真实姓名
              wx.showModal({
                title:"注册信息提示",
                content:"请输入真实姓名",
                showCancel:false  
              })   
          }else{                     
        var rand=require('../../utils/random.js');
        var sign=require('../../utils/sign.js');  
        var username=self.data.regInfo.username;//用户名
        var realname=self.data.regInfo.realname;//真实姓名
        var loginPassword=self.data.regInfo.pwd2;
        var appId=app.globalData.appId;//appid;
        var nonce_str=rand.getRand();//获取随机数
       
        var postParams=[];
        postParams[0]=["username",username];
        postParams[1]=["realname",realname];
        postParams[2]=["loginPassword",loginPassword];
        postParams[3]=["appId",appId];
        postParams[4]=["nonce_str",nonce_str];
        var signVal = sign.createSign(postParams, app.globalDataComment.appKey);//签名       
          wx.request({//注册请求
          url: app.globalData.url+'/user/add',
          data: {
            username: username,
            realname: realname,
            loginPassword:loginPassword,
            appId:appId,
            nonce_str:nonce_str,
            sign:signVal
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method:"POST",
          success: function(res){
            console.log(res.data);
            if(res.data.code==200){
              wx.showToast({
                title: '注册成功',
                icon: 'success',
                duration: 2000
              });
              self.login();//调用
            }else{
              wx.showModal({
                 title:"注册信息提示",
                 content:"注册失败",
                 showCancel:false
               })
            }
          }
        })
      }
    }
  }
  }else{
    wx.showModal({
      title:"注册信息提示",
      content:"用户名已存在",
      showCancel:false
    })
  }
}
})
},
  getInfo:function(){
      var https=0;
      var username=wx.getStorageSync('userName');//用户名
      var appId=app.globalData.appId;//appid;
      var nonce_str=rand.getRand();//获取随机数
      var postParams=[];//签名数组
      postParams[0]=["username",username];
      postParams[1]=["appId",appId];
      postParams[2]=["nonce_str",nonce_str];
      postParams[3]=["https",https];
      var signVal=sign.createSign(postParams,app.globalData.appKey);//签名
      var getUser_url= app.globalData.url+"/user/get.jspx?username="+username+"&appId="+appId+"&nonce_str="+nonce_str+"&sign="+signVal+"&https=0";
       //获取信息
      var self=this;
      wx.request({
      url: getUser_url,
      data: {},
      method: 'POST', 
        success: function(res){
          console.log(res.data);
          wx.setStorageSync('userImg',res.data.body.userImg);
          wx.setStorageSync('thirdAccount',res.data.body.thirdAccount);
          wx.switchTab({
            url:"/pages/users/users"
          });
        }
      })

  },
  login:function(){
        var userName = this.data.regInfo.username;//用户名
        var aesPassword = en.encrypt(this.data.regInfo.pwd2,      app.globalData.aesKey,app.globalData.ivKey);//aes密码
        var nonce_str = rand.getRand();//随机数
        var postParams=[];
        postParams[0]=["username",userName];
        postParams[1]=["aesPassword",aesPassword];
        postParams[2]=["appId",app.globalData.appId];
        postParams[3]=["nonce_str",nonce_str];
        var signVal=sign.createSign(postParams,app.globalData.appKey);//签名 
        var login_url= app.globalData.url+"/user/login.jspx?username="+userName+"&aesPassword="+aesPassword+"&appId="+app.globalData.appId+"&nonce_str="+nonce_str+"&sign="+signVal;
              var self=this;
        wx.request({//登录
          url: login_url,
          data: {},
          method: 'POST', 
          success: function(res){
            console.log(res.data);
              if(res.data.status=="true"){
                var sessionKey=res.data.body;
                wx.setStorageSync('sessionKey',sessionKey);
                wx.setStorageSync('userName',userName);
                self.getInfo();  
              }
               else{
                    wx.showModal({
                      title:"登录信息提示",
                      content:"登录失败",
                      complete:function(){
                         self.setData({
                           userName:"",
                           userPwd:""
                         })
                      }
                    })
               }
          }
        })
  }
})