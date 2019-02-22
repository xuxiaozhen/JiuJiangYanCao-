var app=getApp();
Page({
  data:{
    research:{}
  },
  onLoad:function(options){
     var self=this;
     wx.request({
       url:  app.globalData.url+'/vote/get?id='+options.id,
       data: {},
       method: 'POST', 
       success: function(res){
         console.log(res.data);
          self.setData({
              research:res.data.body
          })
       }
     })
  }
})