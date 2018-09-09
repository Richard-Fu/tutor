//index.js
//获取应用实例

Page({
  stuInfro: function () {
    wx.showActionSheet({
      itemList: ['显示', '添加', '查找'],
      success: function (e) {
        console.log(e.tapIndex)
        if (e.tapIndex == 0) {
          wx.navigateTo({
            url: 'menu/stuInfro/show/show',
          })
        }
        if (e.tapIndex == 2) {
          wx.navigateTo({
            url: 'menu/stuInfro/search/search',
          })
        }
        if (e.tapIndex == 1) {
          wx.navigateTo({
            url: 'menu/stuInfro/add/add',
          })
        }
      }
    })
  },
  teaInfro: function () {
    wx.showActionSheet({
      itemList: ['显示', '添加', '查找'],
      success: function (e) {
        console.log(e.tapIndex)
        if (e.tapIndex == 0) {
          wx.navigateTo({
            url: 'menu/teaInfro/show/show',
          })
        }
        if (e.tapIndex == 2) {
          wx.navigateTo({
            url: 'menu/teaInfro/search/search',
          })
        }
        if (e.tapIndex == 1) {
          wx.navigateTo({
            url: 'menu/teaInfro/add/add',
          })
        }
      }
    })
  },
  stuEva: function () {
    wx.showActionSheet({
      itemList: ['显示', '查找'],
      success: function (e) {
        console.log(e.tapIndex)
        if (e.tapIndex == 0) {
          wx.navigateTo({
            url: './menu/stuEva/show/show',
          })
        }
        if (e.tapIndex == 1) {
          wx.navigateTo({
            url: './menu/stuEva/search/search',
          })
        }
      }
    })
  },
 teaEva: function () {
    wx.showActionSheet({
      itemList: ['显示', '查找'],
      success: function (e) {
        console.log(e.tapIndex)
        if (e.tapIndex == 0) {
          wx.navigateTo({
            url: './menu/teaEva/show/show',
          })
        }
        if (e.tapIndex == 1) {
          wx.navigateTo({
            url: './menu/teaEva/search/search',
          })
        }
      }
    })
  },
  order: function () {
    wx.showActionSheet({
      itemList: ['显示', '查找'],
      success: function (e) {
        console.log(e.tapIndex)
        if (e.tapIndex == 0) {
          wx.navigateTo({
            url: './menu/order/show/show',
          })
        }
        if (e.tapIndex == 1) {
          wx.navigateTo({
            url: './menu/order/search/search',
          })
        }
      }
    })
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