//app.js
App({
 
  showModel:function(){
     wx.showToast({
  title: '正在加载....',
  icon: 'loading',
  duration: 5000
})
  },
  globalData:{
    url:"https://d2.jeecms.com/api/front",
    userInfo:null,
    appId:"1580387213331704",
    appKey:"Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi",
    aesKey:"S9u978Q31NGPGc5H",
    ivKey:"X83yESM9iShLxfwS",
    demos:"https://d2.jeecms.com"
  },
  globalDatavote: {
    url: "https://d2.jeecms.com/api/member",
    userInfo: null,
    appId: "1580387213331704",
    appKey: "Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi",
    aesKey: "S9u978Q31NGPGc5H",
    ivKey: "X83yESM9iShLxfwS"
  },
  globalDataCollect: {
    url: "https://d2.jeecms.com/api/member",
    userInfo: null,
    appId: "1580387213331704",
    appKey: "Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi",
    aesKey: "S9u978Q31NGPGc5H",
    ivKey: "X83yESM9iShLxfwS"
  },
  globalDataComment: {
    url: "https://d2.jeecms.com/api/member",
    userInfo: null,
    appId: "1580387213331704",
    appKey: "Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi",
    aesKey: "S9u978Q31NGPGc5H",
    ivKey: "X83yESM9iShLxfwS"
  }
})