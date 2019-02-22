// pages/myComments/myConmments.js
var app=getApp();//获取appid
var rand=require('../../utils/random.js');//获取随机数
var sign=require('../../utils/sign.js');//获取签名
Page({
  data:{
    comments:[],
    hidden:true,
     page:"",
     hasMore:"false"
  },
  onLoad:function(options){//加载数据
       var sessionKey=wx.getStorageSync("sessionKey");
       var appId = app.globalDataComment.appId;//appid;
       var self=this;
        wx.request({
          url: app.globalDataComment.url+'/comment/mylist?appId='+ appId + "&sessionKey=" + sessionKey,
          data: {},
          method: 'POST', 
          success: function(res){
              self.setData({
                comments:res.data.body,
                page:res.data.body.page
                });
              console.log(self.data.comments)
          }         
        })
  },
   onReachBottom:function(){
      var sessionKey=wx.getStorageSync("sessionKey");
      var appId=app.globalData.appId;//appid;
            this.setData({hidden:false});
            var self=this;
            wx.request({
              url: app.globalDataCollect.url+'/comment/mylist',
              data: {
                 sessionKey:sessionKey,
                 appId:appId,
                 first:self.data.body
              },
              method: 'GET', 
             
          success: function(res){
            if(res.data.body.length==0){
              self.setData({
              hasMore:"true",
               hidden:false
            });
            setTimeout(function(){
              self.setData({
                hasMore:"false",
                hidden:true
              });
            },900)
            }else{
              self.setData({
              comments:self.data.body.concat(res.data),
              hidden:true,
              page:self.data.body.page+res.data.body.length})
            }          
         }
      })
   }


})