/**
 * 三角洲老板点单 - 陪玩详情页逻辑
 * 功能：展示陪玩完整信息、老板售后评价列表、半屏下单面板
 */
const mockData = require('../../utils/mockData');

Page({
  data: {
    // 陪玩完整信息
    player: {},
    // 处理后的评价列表
    reviews: [],

    // ===== 下单面板相关 =====
    // 是否显示下单面板
    showOrderPanel: false,
    // 服务单位：小时 / 局
    orderUnit: '小时',
    // 下单数量
    orderQuantity: 1,
    // 联系电话
    phoneNumber: '',
    // 总价
    totalPrice: 0
  },

  onLoad(options) {
    const { id } = options;

    if (!id) {
      wx.showToast({ title: '参数错误', icon: 'error' });
      return;
    }

    // 根据ID获取陪玩详情
    const player = mockData.getPlayerById(id);

    if (!player) {
      wx.showToast({ title: '未找到该陪玩', icon: 'error' });
      return;
    }

    // 处理数据并设置
    this.initPageData(player);
  },

  /**
   * 初始化页面数据
   * @param {object} player - 陪玩原始数据
   */
  initPageData(player) {
    // 处理评价数据：为每条评价生成星星
    const reviews = (player.reviews || []).map(review => ({
      ...review,
      stars: this.generateStars(review.score || player.rating)
    }));

    // 处理陪玩数据
    const processedPlayer = {
      ...player,
      ratingStars: this.generateStars(player.rating)
    };

    // 初始总价 = 单价 × 1
    const totalPrice = player.price;

    this.setData({
      player: processedPlayer,
      reviews,
      totalPrice,
      // 默认单位跟随陪玩数据
      orderUnit: player.unit || '小时'
    });

    // 动态设置导航栏标题
    wx.setNavigationBarTitle({
      title: player.nickname || '陪玩详情'
    });
  },

  /**
   * 根据评分生成星星数组
   * @param {number} rating - 评分值
   * @returns {array}
   */
  generateStars(rating) {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars ? '⭐' : '☆');
    }
    return stars;
  },

  // ========================================
  //              下单面板交互
  // ========================================

  /**
   * 点击「立即下单」按钮，展开半屏面板
   */
  onOrderTap() {
    this.setData({ showOrderPanel: true });
  },

  /**
   * 关闭下单面板
   */
  onClosePanel() {
    this.setData({ showOrderPanel: false });
  },

  /**
   * 阻止点击面板内部时关闭（catchtap 已在 WXML 处理，此处备用）
   */
  onPanelStay() {
    // 空函数，仅用于阻止事件冒泡
  },

  /**
   * 切换服务单位
   */
  onUnitSwitch(e) {
    const { unit } = e.currentTarget.dataset;
    this.setData({ orderUnit: unit }, () => {
      this.calcTotalPrice();
    });
  },

  /**
   * 数量减少
   */
  onQtyMinus() {
    if (this.data.orderQuantity <= 1) return;
    this.setData({
      orderQuantity: this.data.orderQuantity - 1
    }, () => {
      this.calcTotalPrice();
    });
  },

  /**
   * 数量增加
   */
  onQtyPlus() {
    // 最大数量限制99
    if (this.data.orderQuantity >= 99) {
      wx.showToast({ title: '最多99个', icon: 'none' });
      return;
    }
    this.setData({
      orderQuantity: this.data.orderQuantity + 1
    }, () => {
      this.calcTotalPrice();
    });
  },

  /**
   * 手机号输入
   */
  onPhoneInput(e) {
    this.setData({ phoneNumber: e.detail.value });
  },

  /**
   * 实时计算总价
   * 总价 = 单价 × 数量
   */
  calcTotalPrice() {
    const { player, orderQuantity } = this.data;
    const totalPrice = (player.price || 0) * orderQuantity;
    this.setData({ totalPrice });
  },

  /**
   * 确认下单
   * 校验手机号 → 模拟提交 → 提示成功 → 返回上一页
   */
  onConfirmOrder() {
    const { phoneNumber, player, orderUnit, orderQuantity, totalPrice } = this.data;

    // 1. 手机号校验：11位数字，以1开头
    const phoneReg = /^1[3-9]\d{9}$/;

    if (!phoneNumber) {
      wx.showToast({ title: '请填写联系电话', icon: 'none' });
      return;
    }

    if (!phoneReg.test(phoneNumber)) {
      wx.showToast({ title: '请输入正确的手机号', icon: 'none' });
      return;
    }

    // 2. 模拟提交订单
    const orderInfo = {
      playerId: player.id,
      playerName: player.nickname,
      unit: orderUnit,
      quantity: orderQuantity,
      totalPrice,
      phone: phoneNumber,
      timestamp: new Date().toISOString()
    };

    // 存储到全局（模拟）
    const app = getApp();
    if (app && app.globalData) {
      app.globalData.orders.push(orderInfo);
    }

    // 3. 提示成功
    wx.showModal({
      title: '下单成功 🎉',
      content: '陪玩将尽快联系您～\n请保持手机畅通',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#c9a96e',
      success: () => {
        // 关闭面板并返回上一页
        this.setData({ showOrderPanel: false });
        wx.navigateBack();
      }
    });
  }
});
