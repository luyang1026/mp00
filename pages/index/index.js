//index.js
//获取应用实例
const app = getApp()
const page = Page({
  onLoad(){
    console.log(wx.getSystemInfoSync())
  },
  onTabItemTap(){
    // wx.redirectTo({
    //   url: 'pages/test/test'
    // })
  }
})
