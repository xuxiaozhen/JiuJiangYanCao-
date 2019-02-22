// pages/comments/comments.js
var app = getApp();
Page({
  data:{
    id:"",
    content:{},
    comments:{},
    length:"0",
    text:""
  },
  onLoad:function(options){
    this.setData({id:options.id});
       var self=this;
       app.showModel();
      wx.request({
        url:  app.globalData.url+'/content/get',
        data: {
          https:0,
          format:1,
          id:this.data.id
        },
        header: {
          'content-type': 'application/json'
        },
        dataType:'json',
        method: 'GET',
        success: function(res){
          self.setData({
            content:res.data.body
          }) 
        }
      })
     wx.request({//评论请求
       url:  app.globalData.url+'/comment/list?contentId='+self.data.id,
       data: {},
       method: 'POST', 
       success: function(res){
       	if(res.data.code == 200){
          self.setData({
         	  comments:res.data.body,
            length:res.data.body.length
          });
        }
         wx.hideToast();
       }
     })
  },
  getText:function(e){
    this.setData({text:e.detail.value});
  },
   save:function(){//发布评论
        var app = getApp();
        var rand=require('../../utils/random.js');
        var sign=require('../../utils/sign.js');  
        var contentId=this.data.id;//内容id
        var text=this.data.text;//评论内容
        var appId=app.globalDataCollect.appId;//appid;
        var nonce_str=rand.getRand();//获取随机数
        var sessionKey=wx.getStorageSync('sessionKey');//sessionKey
        var postParams=[];
        postParams[0]=["contentId",contentId];
        postParams[1]=["appId",appId];
        postParams[2]=["nonce_str",nonce_str];
        postParams[3]=["sessionKey",sessionKey];
        postParams[4]=["text",text];
        var signVal=sign.createSign(postParams,app.globalDataCollect.appKey);//签名     
        var self=this;
    if(sessionKey==null||sessionKey==""){
       wx.showModal({
         title:"提示",
         content:"评论需要登录，是否登录?",
         success:function(res){
               if (res.confirm) {
                  wx.navigateTo({
                    url:"../notice/notice"
                  })
                }
         }
       })
    }else{ //发送评论
           wx.request({
               url:  app.globalDataCollect.url+"/comment/save",
               data: {
                 contentId:contentId,
                 text:text,
                 appId:appId,
                 nonce_str:nonce_str,
                 sessionKey:sessionKey,
                 sign:signVal
               },
                header: {
                 'content-type': 'application/x-www-form-urlencoded'
                },
                dataType:'json',
                method: 'POST',
      
               success: function(res){
                 if(res.data.code==201){
                    wx.showToast({
                      title: '评论成功!',
                      icon: 'success',
                      duration: 10000
                    });
                  setTimeout(function(){
                    wx.hideToast();
                    wx.redirectTo({
                      url: 'comments?id='+self.data.id
                    })
                  },700)
                 }else{
                    wx.showToast({
                      title: '评论失败!',
                      icon: 'loading',
                      duration: 500
                    });  
                 }
               }
             })
    }
   }
})