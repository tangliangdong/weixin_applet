//index.js
//获取应用实例
const app = getApp();
var flag = true;
var list = [{
  id: 1,
  name: '加香区',
  isClicked: true,
}, {
  id: 2,
  name: '炒面区',
  isClicked: false,
},{
  id: 3,
  name: '特色区',
  isClicked: false,
}];
var content_arr = {
  id: 1,
  list: [{
    id: 1,
    name:'鸡蛋',
    price: 2,
    image: '../../image/1.jpg',
  }, {
    id: 2,
    name: '鸡蛋牛肉卷',
    price: 3,
    image: '../../image/2.jpg',
  }, {
    id: 3,
    name: '鸡腿',
    price: 5,
    image: '../../image/3.jpg',
  }]
};

var chaomian = {
  id: 2,
  list: [{
    id: 5,
    name: '方便面',
    price: 2,
    image: '../../image/4.jpg',
  }, {
    id: 6,
    name: '龙门粉丝',
    price: 3,
    image: '../../image/5.jpg',
  }, {
    id: 7,
    name: '芝心年糕',
    price: 3,
    image: '../../image/6.jpg',
  }]
}
var tese = {
  id: 2,
  list: [{
    id: 5,
    name: '上校鸡块',
    price: 2,
    image: '../../image/2.jpg',
  }]
}

Page({
  data: {
    motto: 'Hello World',
    color: 'window',
    text: 'first page',
    textName: 'Hello World',
    prevClickedIndex: 0,
    list: list,
    content_arr: content_arr,
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
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    if (app.globalData.userInfo) {

      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
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
  onShow: function(){
    console.log('first page show');
  },
  dish_detail: function(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../dishDetail/dishDetail?id=' + id,
    });
  },
  selectMenu: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    this.data.list[index].isClicked = true;
    this.data.list[this.data.prevClickedIndex].isClicked = false;
    var content_list = [];
    switch(index){
      case 0:
        content_list = content_arr;
        break; 
      case 1:
        content_list = chaomian;
        break;
      case 2:
        content_list = tese;
        break;
    }
    this.setData({
      list: this.data.list,
      prevClickedIndex: index,
      content_arr: content_list,
    });
  }
})
