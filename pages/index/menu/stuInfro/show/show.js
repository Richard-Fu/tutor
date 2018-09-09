// pages/index/menu/stuInfro/show/show.js
Page({
  data: {
    listData: [
      { "infro": "学生编号", "id": "23101"},
      { "infro": "姓名", "name": "于怡怿" },
      { "infro": "性别", "sex": "男"},
      { "infro": "年龄", "age": "16"},
      { "infro": "年级", "grade": "男"},
      { "infro": "上课地址", "address": "初三"},
      { "infro": "手机号", "number": "15605319779"},
    ]
  },
  
  onLoad: function () {
    console.log('onLoad')
  }

})