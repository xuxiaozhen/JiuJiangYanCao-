// pages/myComments/myConmments.js
var app=getApp();//获取appid
var rand=require('../../utils/random.js');//获取随机数
var sign=require('../../utils/sign.js');//获取签名
Page({
  data:{
    comments:[],
    collect:[],
    hidden:true,
    page:"",
    hasMore:"false"
  },
  onLoad:function(options){//加载数据
       var sessionKey=wx.getStorageSync("sessionKey");
       var appId=app.globalData.appId;//appid;
       var self=this;
       var postParams = [];
       //postParams[0] = ["id", id];
       postParams[0] = ["appId", appId];
       //postParams[2] = ["nonce_str", nonce_str];
       //var signVal = sign.createSign(postParams, app.globalDataComment.appKey);//签名
        wx.request({
          url: app.globalDataComment.url + '/content/mycollect?sessionKey=' + sessionKey + '&appId=' + appId,
          data: {},
          dataType:"json",
          method: 'GET', 
          success: function(res){
          
            self.setData({
              collect:res.data.body,
              page:res.data.body.length,
          });
            console.log(self.data.collect)
          }
        })
  },
  onReachBottom:function(){
    console.log("---");
    var sessionKey=wx.getStorageSync("sessionKey");
    var appId = app.globalDataCollect.appId;//appid;
        this.setData({hidden:false});
        var self=this;
        wx.request({
          url: app.globalDataCollect.url +'/content/collect',
          data: {
            sessionKey:sessionKey,
            appId:appId,
            first:self.data.page
          },
        method: 'GET', 
        success: function(res){
          console.log(res.data);
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
              comments:self.data.comments.concat(res.data.body),
              hidden:true,
              page:self.data.page+res.data.body.length})
          }             
        }
        })
   }
})