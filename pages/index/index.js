/**
 * 三角洲老板点单 - 首页逻辑
 * 功能：展示三个陪玩分类入口，点击跳转到列表页
 */
const mockData = require('../../utils/mockData');

Page({
  data: {
    // 分类入口数据
    categories: []
  },

  onLoad() {
    // 加载分类数据
    const categories = mockData.getAllCategories();
    this.setData({ categories });
  },

  /**
   * 点击分类卡片，跳转到陪玩列表页
   * 携带分类类型参数
   */
  onCategoryTap(e) {
    const { type } = e.currentTarget.dataset;
    const categoryInfo = mockData.getCategoryInfo(type);

    wx.navigateTo({
      url: `/pages/list/list?type=${type}&title=${categoryInfo.name}`
    });
  },

  /**
   * 点击「打手入驻」入口，跳转到名片创建页
   */
  onJoinTap() {
    wx.navigateTo({
      url: '/pages/create/create'
    });
  }
});
