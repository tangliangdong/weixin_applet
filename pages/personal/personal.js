const app = getApp();

var setup_list = [
  {
    text: "已购订单",
    method: 'indent',
  },
  {
    text: "测试",
    method: 'indent',
  }
]

Page({
  data: {
    motto: 'Hello World',
    color: 'window',
    text: 'first page',
    setup_list: setup_list,
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
  indent: function(e) {
    wx.navigateTo({
      url: '/pages/indent/indent',
    })
  }
})
