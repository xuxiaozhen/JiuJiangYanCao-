
var app=getApp();
Page({
  data:{
  //     columnData:{
  //       "url":"../changePassword/changePassword?userName="+wx.getStorageSync('userName'),
  //       "iconPath":"../../icons/suo.png",
  //       "columnName":"修改密码"
  //     },
  //     columnList:[
  //         {
  //       "url":"../myComments/myComments",
  //       "iconPath":"../../icons/xx.png",
  //       "columnName":"我的评论"
  //     },{
  //        "url":"../message/Message",
  //       "iconPath":"../../icons/pencil.png",
  //       "columnName":"留言板"
  //     },
  //     {
  //        "url":"../myCollect/myCollect",
  //       "iconPath":"../../icons/star.png",
  //       "columnName":"我的收藏"
  //     }
  //     ],
  //     userName:"请登录",
  //     flag:"show",
  //     userImg:"",
  //     thirdAccount:"",
  //     baseurl: app.globalData.demos
  // }, 
  // userLogin:function(){
  //    var session=wx.getStorageSync('sessionKey');//回话标示
  //      var user=wx.getStorageSync('userName');
  //     if(session==""){
  //       wx.navigateTo({url:"../login/login"});
  //     }else{
  //         wx.navigateTo({url:"../userInfo/userInfo?userName="+user});
  //     }
     
  // },
  // downLogin:function(){
  //         wx.showModal({
  //           title:"退出",
  //           content:"是否退出？",
  //           success:function(res){
  //             if(res.confirm){
  //                wx.clearStorageSync('sessionKey');
  //                wx.clearStorageSync('userName');
  //                 wx.clearStorageSync('userImg');
  //                 wx.switchTab({
  //                  url: '/pages/news/news'
  //                  } 
  //                  )
  //             }
  //           }
  //         })
  // },
  // onLoad:function(){
  //     this.setData({userImg:wx.getStorageSync('userImg'),
  //                    thirdAccount:wx.getStorageSync('thirdAccount')});
  // },
  // onShow:function(){
    
  //    var session=wx.getStorageSync('sessionKey');//回话标示
  //   var user=wx.getStorageSync('userName');
  //   if(session!=""){
  //      this.setData({userName:user,flag:""});
  //      this.setData({userImg:wx.getStorageSync('userImg'),         thirdAccount:wx.getStorageSync('thirdAccount')});
  //   }
  //   else{
  //     this.setData({userName:"请登录",flag:"show",userImg:""});
  //   }
    
       

  },

    bindViewTapMoney: function () {
    wx.navigateTo({
      url: '../../pages/partyMoney/partyMoney'
    })
  },
  bindViewTapMy: function () {
    wx.navigateTo({
      url: '../../pages/myIntegral/myIntegral'
    })
  },
  bindViewTapTask: function () {
    wx.navigateTo({
      url: '../../pages/taskManagement/taskManagement'
    })
  },
  bindViewTapknowledge: function () {
    wx.navigateTo({
      url: '../../pages/knowledge/knowledge'
    })
  },
  bindViewTapHeart: function () {
    wx.navigateTo({
      url: '../../pages/myHeart/myHeart'
    })
  },
})
