Page({
  data: {
    tabs: [/*顶部tab切换*/
      { title: "北京" },
      { title: "上海" },
      { title: "广州" },
      { title: "深圳" },
      { title: "武汉" },
      { title: "成都" },
      { title: "重庆" }
    ],
    activeTab: 0,/*tabs当前选中索引*/
    refresherTriggered: false,/*下拉刷新开关*/
    list: [],/*需要渲染的列表*/
    pageIndex: 1,/*当前页数*/
    totalPage: 1,/*总页数*/
    total: 0,/*总数目*/
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getList();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  /*上拉加载*/
  bindscrolltolower() {
    let pageIndex = this.data.pageIndex + 1;
    if (pageIndex > this.data.totalPage) {
      wx.showToast({
        title: '暂无更多内容',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    this.setData({
      pageIndex: pageIndex,
    })
    this.getList();
  },
  /*下拉刷新*/
  bindrefresherrefresh() {
    this.setData({
      pageIndex: 1,
      refresherTriggered:true,
      list: []
    })
    this.getList();
  },
  /*请求数据*/
  getList() {/*请求数据列表*/
    let formNumber = this.data.list.length;
    let oldData = this.data.list;
    let newArr = [];
    let step = 20;
    if (this.data.activeTab % 2 != 0) {
      step = 0;
    }
    if (this.data.pageIndex === this.data.totalPage && this.data.pageIndex > 1) {
      step = this.data.total - step * (this.data.pageIndex - 1)
    }
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      for (let i = formNumber; i < formNumber + step; i++) {
        newArr.push(i)
      }
      this.setData({
        list: [...oldData, ...newArr],
        total: 34,
        totalPage: Math.ceil(34 / 20),
        refresherTriggered:false
      })
      if (step == 0) {
        wx.showToast({
          title: '暂无数据',
          icon: 'none',
          duration: 1000
        })
      } else {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          duration: 1000
        })
      }
      wx.hideLoading()
    }, 1000)
  },
  /*tab点击*/
  tabclick(e) {
    this.setData({
      activeTab: e.detail.index,
      pageIndex: 1,
      list: []
    })
    this.getList();
  },
  /*swiper切换*/
  swiperChange(e) {
    this.setData({
      activeTab: e.detail.index,
      pageIndex: 1,
      list: []
    })
    this.getList();
  }
})