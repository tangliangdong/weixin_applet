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
    avatarUrl: '',
    nikeName: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  indent: function(e) {
    wx.navigateTo({
      url: '/pages/indent/indent',
    })
  },
  onLoad: function(){
    var $this = this;
    wx.getStorage({
      key: 'avatarUrl',
      success: function(res) {
        $this.setData({
          avatarUrl: res.data,
        })
      },
    });
    wx.getStorage({
      key: 'nikename',
      success: function (res) {
        $this.setData({
          nikeName: res.data,
        })
      },
    })
  }
})
