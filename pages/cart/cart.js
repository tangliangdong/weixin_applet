// pages/cart/cart.js

var list = [{
  id: 1,
  name: '小青菜',
  price: 2,
  src: '../../image/1.jpg',
  amount: 1,
}, {
  id: 2,
  name: '年糕',
  price: 5,
  src: '../../image/4.jpg',
  amount: 2,
}, {
  id: 3,
  name: '鸳鸯锅',
  price: 30,
  src: '../../image/5.jpg',
  amount: 1,
}]
var sum = 0;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dish_list: list,
    sum: sum,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var i in list){
      sum+= list[i].amount*list[i].price;
    }
    this.setData({
      sum: sum,
    })
    console.log(sum);
  },
  // 增加菜的数量按钮
  plus_click: function(e){
    var index = e.currentTarget.dataset.index;
    this.data.dish_list[index].amount++;
    var Lsum = this.data.sum;
    Lsum += this.data.dish_list[index].price;
    this.setData({
      dish_list: this.data.dish_list,
      sum: Lsum,
    });
  },
  // 减少菜的数量按钮
  minus_click: function(e){
    var index = e.currentTarget.dataset.index;
    this.data.dish_list[index].amount--;
    var Lsum = this.data.sum;
    Lsum -= this.data.dish_list[index].price;
    this.setData({
      dish_list: this.data.dish_list,
      sum: Lsum,
    });
  },
  // 结算按钮
  payment: function(e) {
    wx.showToast({
      title: '订单生成成功',
      icon: 'success',
      image: '',
      duration: 2000,
      mask: true,
      success: function(res) {

      },
      fail: function(res) {},
      complete: function(res) {},
    })
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