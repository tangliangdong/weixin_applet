// pages/indentDetail/indentDetail.js
var info = require('../../utils/info');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indent: [],
    order_number: 0,
    addTime: '',
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var $this = this;
    

    wx.request({
      url: info.URL+'getDetailIndent',
      data: {
        id: options.id,
      },
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res);
        var date = new Date(res.data.add_time * 1000);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        $this.setData({
          indent: res.data.list,
          order_number: options.orderNumber,
          addTime: Y + M + D + h + m + s,
          remark: res.data.remark,
          user_note: res.data.user_note,
        })
        
      },
    });
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