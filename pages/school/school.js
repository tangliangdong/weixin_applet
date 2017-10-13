const app = getApp();
var flag = true;

Page({
  data: {
    motto: 'Hello World',
    color: 'window',
    text: 'first page',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jumpSchedule: function (event) {
    wx.navigateTo({
      url: '/pages/schedule/schedule',
    })
  },
  jumpGrade: function(event){
    wx.navigateTo({
      url: '/pages/gradeView/gradeView',
    })
  }
})
