// pages/cart/cart.js

// var list = [{
//   id: 1,
//   name: '小青菜',
//   price: 2,
//   src: '../../image/1.jpg',
//   amount: 1,
// }, {
//   id: 2,
//   name: '年糕',
//   price: 5,
//   src: '../../image/4.jpg',
//   amount: 2,
// }, {
//   id: 3,
//   name: '鸳鸯锅',
//   price: 30,
//   src: '../../image/5.jpg',
//   amount: 1,
// }]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dish_list: [],
    sum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 增加菜的数量按钮
  plus_click: function(e){
    var index = e.currentTarget.dataset.index;
    this.data.dish_list[index].count++;
    var Lsum = this.data.sum;
    Lsum += this.data.dish_list[index].price;
    this.setData({
      dish_list: this.data.dish_list,
      sum: Lsum,
    });
    wx.getStorage({
      key: 'dish_list',
      success: function (res) {
        var list = res.data;
        list[index].count++;
        wx.setStorage({
          key: "dish_list",
          data: list,
        });
      }
    })
    
  },
  // 减少菜的数量按钮
  minus_click: function(e){
    var $this = this;
    var index = e.currentTarget.dataset.index;
    this.data.dish_list[index].count--;
    var Lsum = this.data.sum;
    Lsum -= this.data.dish_list[index].price;
    this.setData({
      dish_list: this.data.dish_list,
      sum: Lsum,
    });
    if (this.data.dish_list[index].count>0){
      // 减少菜的数量
      wx.getStorage({
        key: 'dish_list',
        success: function (res) {
          var list = res.data;
          list[index].count--;
          wx.setStorage({
            key: "dish_list",
            data: list,
          });
        }
      })
    }else{ // 从缓存中删除菜
      wx.getStorage({
        key: 'dish_list',
        success: function (res) {
          var list = res.data;
          list.splice(index,1);
          wx.setStorage({
            key: "dish_list",
            data: list,
          });
          $this.setData({
            dish_list: list,
          });
        }
      })
    }
  },
  // 结算按钮
  payment: function(e) {
    wx.getStorage({
      key: 'dish_list',
      success: function(res) {
        var list = res.data;
        var content = '';
        for(var i in list){
          content += list[i].dishname+'x'+list[i].count+'\n\r';
        }
        wx.showModal({
          title: '确定生成订单？',
          content: content,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              wx.showToast({
                title: '订单生成成功',
              })
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
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
    var $this = this;
    var sum = 0;
    wx.getStorage({
      key: 'dish_list',
      success: function (res) {
        console.log(res.data);
        var list = res.data;
        for (var i in list) {
          sum += list[i].count * list[i].price;
        }
        $this.setData({
          dish_list: list,
          sum: sum,
        });
      }
    });
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