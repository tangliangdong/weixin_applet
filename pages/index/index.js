//index.js
//获取应用实例
const app = getApp();
var info = require('../../utils/info');
var flag = true;
var list = [{
  id: 1,
  dish_type: '加香区',
  isClicked: true,
}, {
  id: 2,
  dish_type: '炒面区',
  isClicked: false,
},{
  id: 3,
  dish_type: '特色区',
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
    list: [],
    content_arr: [],
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
    var $this = this;
    wx.request({
      url: info.URL+'menus',
      success: function(res){
        console.log(res);
        if(res.data.length>0){
          res.data[0].isClicked = true;
          $this.setData({
            list: res.data
          });
          var id = res.data[0].id;
          wx.request({
            url: info.URL+'getDishes/'+id,
            success: function (result) {
              console.log(result);
              if (result.data.length > 0) {
                var data = {
                  id: id,
                  list: result.data
                }
                $this.setData({
                  content_arr: data,
                });
              }
            }
          });
        }
      }
    })
  },
  onShow: function(){
    
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
    var $this = this;
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    if(!this.data.list[index].isClicked){
      this.data.list[index].isClicked = true;
      this.data.list[this.data.prevClickedIndex].isClicked = false;
      var content_list = [];
      wx.request({
        url: info.URL+'getDishes/' + id,
        success: function (result) {
          console.log(result);

          if (result.data.length > 0) {
            var data = {
              id: id,
              list: result.data
            }
            $this.setData({
              content_arr: data,
            });
          }
        }
      });
      this.setData({
        list: this.data.list,
        prevClickedIndex: index,
        content_arr: content_list,
      });
    }
  },
  // 添加菜到购菜车
  plus_click: function(e) {
    var id = e.currentTarget.dataset.id;
    var dishname = e.currentTarget.dataset.dishname;
    var src = e.currentTarget.dataset.src;
    var price = e.currentTarget.dataset.price;
    var data = wx.getStorage({
      key: 'dish_list',
      success: function(res) {
        console.log(res);
        var list = res.data;
        var flag = 0;
        for(var i in list){
          if(list[i].id===id){
            flag = i;
          }
        }
        if(flag===0){
          // 没有之前购买的菜
          list.push({
            id: id,
            count: 1,
            dishname: dishname,
            price: price,
            src: src,
          });
          wx.setStorage({
            key: 'dish_list',
            data: list,
          });
        }else{ // 之前购买过，直接数量加1
          list[flag].count++;
          wx.setStorage({
            key: 'dish_list',
            data: list,
          });
        }
        
      },
      fail: function() {
        var list = [{
          id: id,
          count: 1,
          dishname: dishname,
          price: price,
          src: src,
        }];
        wx.setStorage({
          key: 'dish_list',
          data: list,
        });
      },
    })
    
    wx.showToast({
      title: '成功添加',
      icon: 'success',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
