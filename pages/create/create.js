/**
 * 三角洲老板点单 - 打手入驻/创建名片页逻辑
 * 功能：打手自行填写信息，保存名片到本地存储，列表页可展示
 */
const mockData = require('../../utils/mockData');

// 默认占位头像（picsum 随机图）
const DEFAULT_AVATAR = 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 100);

Page({
  data: {
    // 表单数据
    formData: {
      avatar: '',
      nickname: '',
      type: '',          // huhang / yule / jishu
      price: '',
      unit: '小时',
      tagsInput: '',     // 用户输入的标签文本
      honor: '',
      intro: ''
    },
    // 解析后的标签列表（用于预览）
    tagList: [],
    // 是否正在提交
    submitting: false
  },

  // ========================================
  //              表单交互
  // ========================================

  /**
   * 选择头像 - 调用系统相册/相机
   */
  onChooseAvatar() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 获取临时文件路径作为预览
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          'formData.avatar': tempFilePath
        });
      }
    });
  },

  /**
   * 通用输入处理
   * 通过 data-field 区分字段，自动更新 formData
   */
  onInputChange(e) {
    const { field } = e.currentTarget.dataset;
    const { value } = e.detail;

    this.setData({
      [`formData.${field}`]: value
    });

    // 如果是标签输入，实时更新预览
    if (field === 'tagsInput') {
      this.updateTagPreview(value);
    }
  },

  /**
   * 选择服务分类
   */
  onTypeSelect(e) {
    const { type } = e.currentTarget.dataset;
    this.setData({
      'formData.type': type
    });
  },

  /**
   * 切换服务单位
   */
  onUnitSwitch(e) {
    const { unit } = e.currentTarget.dataset;
    this.setData({
      'formData.unit': unit
    });
  },

  /**
   * 解析标签文本为数组
   * 支持中英文逗号分隔
   */
  updateTagPreview(text) {
    if (!text) {
      this.setData({ tagList: [] });
      return;
    }
    // 按中英文逗号拆分，过滤空字符串，去首尾空格，最多5个标签
    const tags = text
      .split(/[,，]/)
      .map(t => t.trim())
      .filter(t => t.length > 0)
      .slice(0, 5);

    this.setData({ tagList: tags });
  },

  // ========================================
  //              表单提交
  // ========================================

  /**
   * 提交入驻 - 校验 + 保存
   */
  onSubmit() {
    const { formData, submitting } = this.data;

    // 防重复提交
    if (submitting) return;

    // ----- 表单校验 -----

    // 昵称
    if (!formData.nickname.trim()) {
      wx.showToast({ title: '请输入昵称', icon: 'none' });
      return;
    }

    // 分类
    if (!formData.type) {
      wx.showToast({ title: '请选择服务分类', icon: 'none' });
      return;
    }

    // 单价
    const price = parseFloat(formData.price);
    if (!price || price <= 0) {
      wx.showToast({ title: '请输入有效单价', icon: 'none' });
      return;
    }

    // 个人简介
    if (!formData.intro.trim()) {
      wx.showToast({ title: '请输入个人简介', icon: 'none' });
      return;
    }

    // ----- 组装数据 -----
    this.setData({ submitting: true });

    // 解析标签
    const tags = formData.tagsInput
      ? formData.tagsInput.split(/[,，]/).map(t => t.trim()).filter(t => t.length > 0).slice(0, 5)
      : ['新人入驻'];

    // 如果没有标签，给默认
    if (tags.length === 0) {
      tags.push('新人入驻');
    }

    // 构建名片对象（与 mockData 结构一致）
    const player = {
      id: mockData.generatePlayerId(),
      avatar: formData.avatar || DEFAULT_AVATAR,
      nickname: formData.nickname.trim(),
      type: formData.type,
      price: price,
      unit: formData.unit,
      orderCount: 0,            // 新入驻，接单数为0
      rating: 5.0,              // 新入驻默认5.0分
      tags: tags,
      honor: formData.honor.trim() || '🎖️ 新锐入驻',
      intro: formData.intro.trim(),
      reviews: []                // 暂无评价
    };

    // 保存到本地存储
    const saved = mockData.saveLocalPlayer(player);

    if (saved) {
      wx.showModal({
        title: '入驻成功 🎉',
        content: `名片「${player.nickname}」已创建！\n前往「${this.getTypeName(formData.type)}」列表即可查看。`,
        showCancel: true,
        confirmText: '去看看',
        cancelText: '继续编辑',
        confirmColor: '#c9a96e',
        success: (res) => {
          if (res.confirm) {
            // 跳转到对应分类列表
            const categoryInfo = mockData.getCategoryInfo(formData.type);
            wx.redirectTo({
              url: `/pages/list/list?type=${formData.type}&title=${categoryInfo.name}`
            });
          } else {
            // 留在当前页面，重置表单
            this.resetForm();
          }
        }
      });
    } else {
      wx.showToast({ title: '保存失败，请重试', icon: 'error' });
    }

    this.setData({ submitting: false });
  },

  /**
   * 重置表单（入驻成功后继续编辑）
   */
  resetForm() {
    this.setData({
      formData: {
        avatar: '',
        nickname: '',
        type: '',
        price: '',
        unit: '小时',
        tagsInput: '',
        honor: '',
        intro: ''
      },
      tagList: [],
      submitting: false
    });
  },

  /**
   * 根据分类类型获取中文名称
   */
  getTypeName(type) {
    const map = {
      huhang: '护航',
      yule: '娱乐陪玩',
      jishu: '技术陪玩'
    };
    return map[type] || '陪玩';
  }
});
