//index.js
//获取应用实例
const app = getApp()
const ctx = wx.createCanvasContext('firstCanvas')
Page({
  data: {
    motto: 'Hello World',
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
    var rpx
    var _this = this

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
   
    
    ctx.font = "normal bold 50px 黑体"; 
    ctx.fillText("开心", 50, 50);
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