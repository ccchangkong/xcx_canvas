//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
const ctx = wx.createCanvasContext('firstCanvas')

Page({
  data: {
    imgUrl: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canvasWidth: 300,
    canvasHeight: 150
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    let rpx
    let _this = this
    const wxGetImageInfo =util.Promise.resolve(wx.getImageInfo())
    console.log(util.Promise)
    wx.getSystemInfo({
      success: function(res) {
        _this.data.canvasWidth = res.windowWidth
        _this.data.canvasHeight = res.windowHeight * .8
        rpx = res.windowWidth / 750 //750为设计稿宽度
      },
    })
    this.setData({
      canvasWidth: this.data.canvasWidth,
      canvasHeight: this.data.canvasHeight
    })
    // wxGetImageInfo({ src: 'http://wx4.sinaimg.cn/mw690/6c7bfb12gy1ftui8gu8uaj20j60j1gmt.jpg'}).thne((ree)=>{
    //   var path = res.path;//这是得到文件的临时路径
    //   //然后将图片画在背景图上
    //   ctx.draw(path, 0, 0, 100, 100);
    // })
    // wx.getImageInfo({
    //   src: 'http://wx4.sinaimg.cn/mw690/6c7bfb12gy1ftui8gu8uaj20j60j1gmt.jpg',
    //   success: function (res) {
    //     var path = res.path;//这是得到文件的临时路径
    //     //然后将图片画在背景图上
    //     ctx.draw(path, 0, 0, 100, 100);
    //   }
    // })

    
    ctx.font = "normal bold 50px 黑体"; 
    ctx.fillText("开心", 50, 50);

    ctx.draw(false, setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'firstCanvas',
        destWidth: _this.data.canvasWidth,//
        destHeight: _this.data.canvasHeight,
        fileType: "png",//文件格式，支持png和jpg
        success: function (res) {
          //这就是生成的文件临时路径
          var tempFilePath = res.tempFilePath;

            _this.setData({
              imgUrl: tempFilePath
            })
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }, 1000))

    // context.drawImage('./image/bg.jpg', 0, 0, this.data.canvasWidth, this.data.canvasHeight)
    // s.drawImage(Url, 0, 0, 265 * rpx, 262.5 * rpx);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})