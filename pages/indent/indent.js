// pages/indent/indent.js

var info = require('../../utils/info');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indent_list: [],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var $this = this;
    var userId = wx.getStorageSync("userId");
    wx.request({
      url: info.URL + 'getIndent?userId=' + userId,
      success: function(res){
        console.log(res);
        $this.setData({
          indent_list: res.data,
        })

      }
    })
  },
  jumpDetailIndent: function(e) {
    var id = e.currentTarget.dataset.id;
    var order_number = e.currentTarget.dataset.order;
    var add_time = e.currentTarget.dataset.addtime;
    wx.navigateTo({
      url: '../indentDetail/indentDetail?id=' + id + '&orderNumber=' + order_number + '&add_time=' + add_time,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})