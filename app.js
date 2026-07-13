/**
 * 三角洲老板点单 - 小程序入口
 * 三角洲行动游戏陪玩下单小程序
 */
App({
  onLaunch() {
    // 获取系统信息，用于适配不同机型
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    this.globalData.statusBarHeight = systemInfo.statusBarHeight;
  },

  // 全局共享数据
  globalData: {
    systemInfo: null,
    statusBarHeight: 0,
    // 订单临时存储（模拟）
    orders: []
  }
});
