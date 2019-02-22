var app=getApp();//获取appid
var rand=require('../../utils/random.js');//获取随机数
var sign=require('../../utils/sign.js');//获取签名

Page({
  data:{
     changeData:"",
      pramName:"" ,
      realname:""
  },
  onLoad:function(options){
    wx.setNavigationBarTitle({
     title: '修改'+options.barName
       })
    this.setData({
        changeData:options.data,
         pramName:options.pramName,
       realname:options.realname
    })
  },
  changeValue:function(e){//获取文本框的值
      this.setData({changeData:e.detail.value});
  },
  setInfo:function(){
        var username=wx.getStorageSync('userName');//用户名
        var realname=this.data.realname;//真实名称
        var pramName=this.data.pramName;//参数名
        var changeData=this.data.changeData//修改的值
        var appId=app.globalData.appId;//appid;
        var nonce_str=rand.getRand();//获取随机数
        var sessionKey = wx.getStorageSync('sessionKey');
        var postParams=[];//签名数组
         postParams[0]=["username",username];
         postParams[1]=[pramName,changeData]; 
         postParams[2]=["realname",realname];
         postParams[3]=["appId",appId];
         postParams[4]=["nonce_str",nonce_str];
         postParams[5] = ["sessionKey", sessionKey];
         var signVal = sign.createSign(postParams, app.globalDataCollect.appKey);//签名
         var change_Url= app.globalDataCollect.url+"/user/edit?username="+username+"&appId="+appId+"&nonce_str="+nonce_str+"&sign="+signVal+"&"+pramName+"="+changeData+"&realname="+realname + "&sessionKey=" + sessionKey;
        wx.request({
          url: change_Url,
          data: {},
          method: 'POST', 
          success: function(res){
             if(res.data.code==200){
                 wx.showToast({
                title: '修改成功！',
                 icon: 'success',
                 duration: 1500
                  });
                  setTimeout(function(){
                    wx.redirectTo({
                      url: 'userInfo?userName='+username,
                      success: function(res){
                         
                      }
                    })

                  },1500)
             }
          }
        })



  }
  
})