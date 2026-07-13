/**
 * 三角洲老板点单 - 陪玩列表页逻辑
 * 功能：展示分类陪玩列表，支持下拉刷新、触底加载分页
 */
const mockData = require('../../utils/mockData');

// 每页加载数量
const PAGE_SIZE = 10;

Page({
  data: {
    // 分类类型（huhang/yule/jishu）
    categoryType: '',
    // 当前展示的陪玩列表（已处理评分星星等展示字段）
    playerList: [],
    // 原始完整列表（用于分页截取）
    fullList: [],
    // 当前页码
    currentPage: 1,
    // 是否正在加载
    loading: false,
    // 是否已无更多数据
    noMore: false,
    // 总数统计
    totalCount: 0,
    totalOrders: 0
  },

  onLoad(options) {
    // 接收页面参数
    const { type, title } = options;

    // 动态设置导航栏标题
    wx.setNavigationBarTitle({
      title: title || '陪玩列表'
    });

    this.setData({ categoryType: type });

    // 加载数据
    this.loadPlayerData();
  },

  /**
   * 加载陪玩数据（首次加载）
   */
  loadPlayerData() {
    const { categoryType } = this.data;

    // 从模拟数据获取该分类的全部陪玩
    const { list } = mockData.getPlayerListByType(categoryType);

    // 计算总接单数
    const totalOrders = list.reduce((sum, player) => sum + player.orderCount, 0);

    // 处理每条数据，添加展示辅助字段
    const processedList = list.map(player => this.processPlayerData(player));

    // 第一页数据
    const firstPage = processedList.slice(0, PAGE_SIZE);

    this.setData({
      fullList: processedList,
      playerList: firstPage,
      totalCount: list.length,
      totalOrders: this.formatNumber(totalOrders),
      currentPage: 1,
      noMore: processedList.length <= PAGE_SIZE
    });
  },

  /**
   * 处理单条陪玩数据，添加展示辅助字段
   * @param {object} player - 原始陪玩数据
   * @returns {object} 处理后的数据
   */
  processPlayerData(player) {
    return {
      ...player,
      // 生成实心五角星字符串数组，用于WXML渲染
      ratingStars: this.generateStars(player.rating),
      // 获取最近一条评价内容（截断）
      latestReview: player.reviews && player.reviews.length > 0
        ? this.truncateText(player.reviews[0].content, 28)
        : ''
    };
  },

  /**
   * 根据评分生成星星数组
   * @param {number} rating - 评分（4.5-5.0）
   * @returns {array} 星星字符串数组
   */
  generateStars(rating) {
    // 五星制：整数颗实心星
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars ? '⭐' : '☆');
    }
    return stars;
  },

  /**
   * 点击陪玩卡片，跳转到详情页
   */
  onPlayerTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  /**
   * 下拉刷新 - 重置列表
   */
  onPullDownRefresh() {
    this.setData({
      currentPage: 1,
      noMore: false
    });

    // 重新加载数据
    this.loadPlayerData();

    // 停止下拉刷新动画
    wx.stopPullDownRefresh();
  },

  /**
   * 触底加载更多 - 分页加载
   */
  onReachBottom() {
    const { fullList, currentPage, loading, noMore } = this.data;

    // 如果正在加载或已无更多数据，直接返回
    if (loading || noMore) return;

    this.setData({ loading: true });

    // 模拟网络延迟（300ms），增强真实感
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = currentPage * PAGE_SIZE;
      const endIndex = nextPage * PAGE_SIZE;
      const moreData = fullList.slice(startIndex, endIndex);

      if (moreData.length === 0) {
        // 没有更多数据了
        this.setData({
          loading: false,
          noMore: true
        });
        return;
      }

      // 追加数据到列表
      this.setData({
        playerList: [...this.data.playerList, ...moreData],
        currentPage: nextPage,
        loading: false,
        noMore: endIndex >= fullList.length
      });
    }, 300);
  },

  /**
   * 格式化大数字（如 1286 → "1.3k"）
   * @param {number} num - 原始数字
   * @returns {string} 格式化后的字符串
   */
  formatNumber(num) {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return String(num);
  },

  /**
   * 截断文本，超过长度加省略号
   * @param {string} text - 原始文本
   * @param {number} maxLen - 最大长度
   * @returns {string}
   */
  truncateText(text, maxLen) {
    if (text.length <= maxLen) return text;
    return text.substring(0, maxLen) + '...';
  }
});
