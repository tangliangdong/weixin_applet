
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idNumber: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载完毕');
    const requestTask = wx.request({
      url: 'http://localhost/applet/test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  // 保存准考证号码
  idNumberInput: function(event){
    console.log(event);
    this.setData({
      idNumber: event.detail.value
    });
  },

  // 保存
  saveIdNumber: function(event){
    // const requestTask = wx.request({
    //   url: 'test.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
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