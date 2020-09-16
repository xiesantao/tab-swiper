Component({
    data: {
        selected: -1,
        show: true,
        list: [{
                pagePath: "/pages/home/index",
                text: "首页",
                iconPath: "/assets/images/tabBar/home.png",
                selectedIconPath: "/assets/images/tabBar/home-action.png"
            },
            {
                pagePath: "/pages/order/index",
                text: "订单",
                iconPath: "/assets/images/tabBar/order.png",
                selectedIconPath: "/assets/images/tabBar/order-action.png"
            },
            {
                pagePath: "/pages/my/index",
                text: "我的",
                iconPath: "/assets/images/tabBar/my.png",
                selectedIconPath: "/assets/images/tabBar/my-action.png"
            }
        ]
    },
    methods: {
        tabChange(e) {
            wx.setStorageSync('pageInfor', '')
            let url = e.currentTarget.dataset.path
            let index = e.currentTarget.dataset.index
            this.setData({
                selected:index
            })
            let that = this
            wx.switchTab({
              url: url,
            })
        }
    }
})