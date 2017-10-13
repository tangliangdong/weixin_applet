//index.js
//获取应用实例
const app = getApp();
var flag = true;
var list = ['加香区', '炒面区','特色区'];

Page({
  data: {
    motto: 'Hello World',
    color: 'window',
    text: 'first page',
    textName: 'Hello World',
    list: list,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      withCredentials: true,
      success: res => {
        app.globalData.userInfo = res.userInfo;
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    if (app.globalData.userInfo) {
      console.log(app.globalData);

      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        withCredentials: true,
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  clickName: function(event){
    console.log('点击了文字');
    var color = '';
    if(flag){
      color = 'window-red';
      flag = false;
    }else{
      color = 'window';
      flag = true;
    }
    this.setData({
      color: color,
      textName: 'Love',
    });
  },
  onShow: function(){
    console.log('first page show');
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  dish_detail: function(e){
    console.log(e);
  }
})
