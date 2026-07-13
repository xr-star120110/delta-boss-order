/**
 * 三角洲老板点单 - 模拟数据
 * 三种分类：护航(huhang)、娱乐陪玩(yule)、技术陪玩(jishu)
 * 数据风格：三角洲行动军事/特种兵题材
 *
 * 字段说明：
 * - rating: 老板综合评分，等于所有 reviews 评分的均值（精确到一位小数）
 * - reviews: 老板售后评价数组，每条含 userName、content、score
 * - tags: 个人特色标签
 * - honor: 荣誉勋章
 */

// ==================== 护航陪玩 (huhang) ====================
// 护航陪玩注重：成功率、生存率、战术掩护能力
const huhangList = [
  {
    id: 'h001',
    avatar: 'https://picsum.photos/200?random=1',
    nickname: '影子先锋',
    price: 50,
    unit: '小时',
    orderCount: 2386,
    rating: 4.9,
    tags: ['战术大师', '零失误', '全局指挥'],
    honor: '🏅 王牌护航员',
    intro: '前特种部队退役，三角洲行动S1赛季传奇段位。擅长全地图战术规划，护航成功率99.2%，是老板们最信赖的撤离保障。',
    reviews: [
      { userName: '老板阿强', content: '太稳了，带我从青铜打到钻石，一次都没翻车！', score: 5.0 },
      { userName: '老板小李', content: '声音沉稳，指挥清晰，跟着他就感觉特别安全。', score: 4.9 },
      { userName: '老板大壮', content: '连赢五把，影子哥的战术意识真的顶级。', score: 4.8 },
      { userName: '老板飞哥', content: '第一次找护航就遇到这么靠谱的，以后就认准影子先锋了。', score: 4.9 }
    ]
  },
  {
    id: 'h002',
    avatar: 'https://picsum.photos/200?random=2',
    nickname: '暗夜猎手',
    price: 45,
    unit: '小时',
    orderCount: 1856,
    rating: 4.7,
    tags: ['枪刚', '反应快', '单兵作战'],
    honor: '💎 百场零失误',
    intro: 'FPS游戏老炮，三角洲行动内测玩家。枪法精准，单兵作战能力极强，一打三不在话下。',
    reviews: [
      { userName: '老板阿飞', content: '枪法真的刚，一穿三看得我目瞪口呆。', score: 4.8 },
      { userName: '老板小美', content: '速度快效率高，就是话不多，比较严肃。', score: 4.5 },
      { userName: '老板大刘', content: '带我十连胜，暗夜猎手名不虚传。', score: 4.7 }
    ]
  },
  {
    id: 'h003',
    avatar: 'https://picsum.photos/200?random=3',
    nickname: '暴风战鹰',
    price: 55,
    unit: '小时',
    orderCount: 3201,
    rating: 5.0,
    tags: ['全能型', '耐心教学', '人气王'],
    honor: '👑 人气护航王',
    intro: '三角洲行动头部主播，全网粉丝50万+。护航风格稳健又不失激进，擅长根据老板水平调整策略。',
    reviews: [
      { userName: '老板老王', content: '主播级体验，又强又会教，五星好评！', score: 5.0 },
      { userName: '老板小陈', content: '人气这么高是有原因的，确实强，脾气也好。', score: 5.0 },
      { userName: '老板阿杰', content: '边打边讲解，学了不少东西。', score: 5.0 }
    ]
  },
  {
    id: 'h004',
    avatar: 'https://picsum.photos/200?random=4',
    nickname: '铁壁堡垒',
    price: 40,
    unit: '局',
    orderCount: 956,
    rating: 4.6,
    tags: ['防守专家', '稳扎稳打', '新人友好'],
    honor: '🛡️ 防守铁卫',
    intro: '专精防守点位，擅长为老板创造安全输出环境。新人老板的最佳选择，耐心讲解每个细节。',
    reviews: [
      { userName: '老板新手', content: '作为纯新手，铁壁哥讲得特别细致，体验很好。', score: 4.7 },
      { userName: '老板小胖', content: '防守是真的稳，就是有时候太保守了。', score: 4.5 },
      { userName: '老板大熊', content: '稳中求胜，适合我这种不喜欢冒险的老板。', score: 4.6 }
    ]
  },
  {
    id: 'h005',
    avatar: 'https://picsum.photos/200?random=5',
    nickname: '幽灵刺客',
    price: 60,
    unit: '小时',
    orderCount: 4102,
    rating: 4.9,
    tags: ['潜行专家', '高爆发', '闪电战'],
    honor: '🏆 赛季MVP',
    intro: '三角洲行动竞技榜常年前十，擅长闪电突袭战术。快速清图，让老板体验飞一般的感觉。',
    reviews: [
      { userName: '老板疾风', content: '快准狠，10分钟一局，效率拉满！', score: 5.0 },
      { userName: '老板闪电', content: '幽灵的打法太飘逸了，看得我眼花缭乱。', score: 4.9 },
      { userName: '老板小虎', content: '贵是贵了点，但值这个价。', score: 4.8 }
    ]
  },
  {
    id: 'h006',
    avatar: 'https://picsum.photos/200?random=6',
    nickname: '钢铁洪流',
    price: 35,
    unit: '局',
    orderCount: 723,
    rating: 4.5,
    tags: ['重装专家', '正面突破', '硬刚型'],
    honor: '💪 钢铁先锋',
    intro: '重装爱好者，喜欢正面硬刚。带老板体验什么叫真正的火力压制，不服就干。',
    reviews: [
      { userName: '老板硬汉', content: '正面硬刚太爽了，钢铁哥枪管子都打红了。', score: 4.6 },
      { userName: '老板小武', content: '适合喜欢刚枪的老板，就是偶尔会翻车哈哈。', score: 4.3 },
      { userName: '老板大炮', content: '火力确实猛，但希望有时候能稳一点。', score: 4.5 }
    ]
  },
  {
    id: 'h007',
    avatar: 'https://picsum.photos/200?random=7',
    nickname: '夜鹰指挥官',
    price: 48,
    unit: '小时',
    orderCount: 1567,
    rating: 4.8,
    tags: ['战略大师', '团队配合', '信息为王'],
    honor: '🎖️ 战术之星',
    intro: '前战队指挥，擅长信息收集和团队调度。每一局都是一场精心策划的军事行动。',
    reviews: [
      { userName: '老板军师', content: '指挥官级别的体验，每个决策都有理有据。', score: 4.9 },
      { userName: '老板小兵', content: '学到了很多战术知识，不只是被带飞。', score: 4.7 },
      { userName: '老板老张', content: '专业的队伍就该这样，信息共享做得很好。', score: 4.8 }
    ]
  },
  {
    id: 'h008',
    avatar: 'https://picsum.photos/200?random=8',
    nickname: '闪电突袭',
    price: 42,
    unit: '小时',
    orderCount: 2103,
    rating: 4.7,
    tags: ['速推流', '高效刷分', '极限操作'],
    honor: '⚡ 速通之王',
    intro: '专注速通刷分，每一分钟都不浪费。适合想要快速冲分的老板，效率即正义。',
    reviews: [
      { userName: '老板刷分', content: '一小时刷了平时三小时的量，效率惊人。', score: 4.8 },
      { userName: '老板急急', content: '急性子福音，不拖泥带水，干净利落。', score: 4.6 },
      { userName: '老板冲冲', content: '速推还会讲解关键点，不是纯带飞。', score: 4.7 }
    ]
  },
  {
    id: 'h009',
    avatar: 'https://picsum.photos/200?random=9',
    nickname: '寒刃孤狼',
    price: 52,
    unit: '小时',
    orderCount: 1890,
    rating: 4.8,
    tags: ['独狼打法', '极限翻盘', '狙击专家'],
    honor: '🎯 狙神认证',
    intro: '顶级狙击手，千米之外取敌首级。一人一狙可定胜负，翻盘能力极强。',
    reviews: [
      { userName: '老板远望', content: '狙击枪玩得出神入化，一枪一个小朋友。', score: 4.9 },
      { userName: '老板狙击', content: '好几次以为要输了，寒刃一狙翻盘。', score: 4.8 },
      { userName: '老板小龙', content: '虽然语言不多，但枪法就是最好的交流。', score: 4.7 }
    ]
  }
];

// ==================== 娱乐陪玩 (yule) ====================
// 娱乐陪玩注重：氛围、聊天、轻松愉快的游戏体验
const yuleList = [
  {
    id: 'y001',
    avatar: 'https://picsum.photos/200?random=11',
    nickname: '甜心狙击',
    price: 30,
    unit: '小时',
    orderCount: 5201,
    rating: 4.8,
    tags: ['话多有趣', '气氛组', '治愈系'],
    honor: '🌟 人气之星',
    intro: '声音甜美，聊天鬼才。不仅能带你上分，更能让你在游戏中忘记烦恼，体验真正的快乐游戏。',
    reviews: [
      { userName: '老板开心', content: '打游戏还能听相声，太欢乐了哈哈哈！', score: 4.9 },
      { userName: '老板轻松', content: '上了一天班累得要死，和甜心打几把直接满血复活。', score: 4.8 },
      { userName: '老板快乐', content: '不只是陪玩，简直是兼职心理医生。', score: 4.7 }
    ]
  },
  {
    id: 'y002',
    avatar: 'https://picsum.photos/200?random=12',
    nickname: '战场段子手',
    price: 28,
    unit: '小时',
    orderCount: 4320,
    rating: 4.6,
    tags: ['段子手', '东北话', '整活王'],
    honor: '😂 欢乐制造机',
    intro: '东北老铁，自带喜感。战场上的每一秒都是相声现场，让你笑着就把分上了。',
    reviews: [
      { userName: '老板笑死', content: '笑得我枪都端不稳了，东北话太有感染力。', score: 4.7 },
      { userName: '老板东北', content: '老乡见老乡，两眼泪汪汪，但这眼泪是笑出来的。', score: 4.6 },
      { userName: '老板南方', content: '第一次听东北人打游戏，太魔性了。', score: 4.5 }
    ]
  },
  {
    id: 'y003',
    avatar: 'https://picsum.photos/200?random=13',
    nickname: '蜜桃汽水',
    price: 35,
    unit: '小时',
    orderCount: 3890,
    rating: 4.9,
    tags: ['少女音', '温柔耐心', '萌新之友'],
    honor: '🍑 甜蜜担当',
    intro: '温柔少女音，对萌新老板超级友好。不催不赶，陪你慢慢探索三角洲的每一个角落。',
    reviews: [
      { userName: '老板新手', content: '第一次玩FPS，蜜桃特别耐心，感动哭了。', score: 5.0 },
      { userName: '老板大叔', content: '虽然我反应慢，但蜜桃从不嫌弃。', score: 4.9 },
      { userName: '老板菜鸟', content: '声音太好听了，听着就让人放松。', score: 4.8 }
    ]
  },
  {
    id: 'y004',
    avatar: 'https://picsum.photos/200?random=14',
    nickname: '摇滚战士',
    price: 32,
    unit: '小时',
    orderCount: 2678,
    rating: 4.5,
    tags: ['摇滚青年', '激情拉满', '燃系打法'],
    honor: '🎸 燃系代言人',
    intro: '摇滚乐爱好者，边打游戏边放摇滚。激情四射的打法，让你肾上腺素飙升。',
    reviews: [
      { userName: '老板摇滚', content: '背景音乐配合枪声，太燃了！', score: 4.6 },
      { userName: '老板燃尽', content: '适合想发泄的老板，激情报点让人上头。', score: 4.5 },
      { userName: '老板安静', content: '激情是激情，但背景音乐确实有点吵。', score: 4.3 }
    ]
  },
  {
    id: 'y005',
    avatar: 'https://picsum.photos/200?random=15',
    nickname: '深海之声',
    price: 33,
    unit: '小时',
    orderCount: 3156,
    rating: 4.7,
    tags: ['低音炮', '磁性嗓音', '治愈聊天'],
    honor: '🎙️ 声优级陪玩',
    intro: '声优级低音炮，一开口就是电台质感。陪你聊天解压，顺便上上分。',
    reviews: [
      { userName: '老板声控', content: '这个声音绝了，可以录下来当闹钟吗？', score: 4.8 },
      { userName: '老板失眠', content: '打完游戏好睡觉，声音太有安全感了。', score: 4.7 },
      { userName: '老板声优', content: '以为是来打游戏的，结果是来听声音的。', score: 4.6 }
    ]
  },
  {
    id: 'y006',
    avatar: 'https://picsum.photos/200?random=16',
    nickname: '奶茶杀手',
    price: 25,
    unit: '局',
    orderCount: 6540,
    rating: 4.4,
    tags: ['话痨', '奶茶控', '佛系打分'],
    honor: '🧋 奶茶代言人',
    intro: '一边喝奶茶一边打游戏，佛系随缘。输赢不重要，开心最重要。',
    reviews: [
      { userName: '老板佛系', content: '佛系陪玩，输了也不生气，心态超好。', score: 4.5 },
      { userName: '老板奶茶', content: '我已经跟着他喝了半个月奶茶了。', score: 4.3 },
      { userName: '老板随缘', content: '轻松愉快，适合休闲娱乐。', score: 4.4 }
    ]
  },
  {
    id: 'y007',
    avatar: 'https://picsum.photos/200?random=17',
    nickname: '猫系陪玩',
    price: 38,
    unit: '小时',
    orderCount: 2870,
    rating: 4.9,
    tags: ['傲娇属性', '实力派', '反差萌'],
    honor: '🐱 反差萌王',
    intro: '表面高冷傲娇，实际超级宠老板。枪法犀利但说话软萌，反差感拉满。',
    reviews: [
      { userName: '老板猫奴', content: '被傲娇到了，但确实强得没话说。', score: 5.0 },
      { userName: '老板汪星', content: '实力与可爱并存，这谁顶得住啊。', score: 4.9 },
      { userName: '老板阿喵', content: '表面说"一般般啦"，手底下全是对面的人头。', score: 4.8 }
    ]
  },
  {
    id: 'y008',
    avatar: 'https://picsum.photos/200?random=18',
    nickname: '派对之王',
    price: 30,
    unit: '小时',
    orderCount: 4321,
    rating: 4.7,
    tags: ['气氛担当', '团建首选', '全能选手'],
    honor: '🎉 派对达人',
    intro: '团建/派对首选陪玩！自带BGM和气氛，一个人就是一个综艺节目。',
    reviews: [
      { userName: '老板团建', content: '公司团建找他带我们五黑，气氛直接拉满！', score: 4.8 },
      { userName: '老板开心果', content: '一个人撑起整个队伍的氛围。', score: 4.7 },
      { userName: '老板聚会', content: '朋友聚会必点，比KTV好玩多了。', score: 4.6 }
    ]
  },
  {
    id: 'y009',
    avatar: 'https://picsum.photos/200?random=19',
    nickname: '暴走萝莉',
    price: 35,
    unit: '小时',
    orderCount: 3560,
    rating: 4.6,
    tags: ['萝莉音', '暴走打法', '惊喜不断'],
    honor: '🎀 最萌反差',
    intro: '萝莉音配暴走打法，你以为她是小可爱，上了战场她比谁都猛。',
    reviews: [
      { userName: '老板震惊', content: '听到萝莉音还以为点错了，结果她一个人杀穿了对面。', score: 4.7 },
      { userName: '老板反差', content: '这反差也太大了，粉了粉了。', score: 4.6 },
      { userName: '老板萌新', content: '萝莉姐姐带飞，感觉自己在看动漫。', score: 4.5 }
    ]
  }
];

// ==================== 技术陪玩 (jishu) ====================
// 技术陪玩注重：教学能力、技术深度、复盘分析
const jishuList = [
  {
    id: 'j001',
    avatar: 'https://picsum.photos/200?random=21',
    nickname: '战术教授',
    price: 60,
    unit: '小时',
    orderCount: 1890,
    rating: 4.9,
    tags: ['学院派', '系统教学', '复盘专家'],
    honor: '🎓 金牌教练',
    intro: '前CS职业选手，现三角洲行动战术分析师。系统化教学方法，从基础到进阶，让你每一把都有进步。',
    reviews: [
      { userName: '老板学霸', content: '上了五节课，KD从0.5飙到2.0，教授真传！', score: 5.0 },
      { userName: '老板学生', content: '每节课都有复盘笔记，学得明明白白。', score: 4.9 },
      { userName: '老板认真', content: '系统化的教学，比网上那些零散教程强太多了。', score: 4.8 }
    ]
  },
  {
    id: 'j002',
    avatar: 'https://picsum.photos/200?random=22',
    nickname: '枪械大师',
    price: 55,
    unit: '小时',
    orderCount: 2340,
    rating: 4.8,
    tags: ['全枪械精通', '压枪教学', '配件搭配'],
    honor: '🔫 武器专家',
    intro: '精通三角洲行动全部枪械，对配件搭配有深入研究。教你找到最适合自己的武器配置。',
    reviews: [
      { userName: '老板枪迷', content: '大师配的枪真的不一样，手感翻倍！', score: 4.9 },
      { userName: '老板配件', content: '以前乱装配件，现在知道每一件的作用了。', score: 4.7 },
      { userName: '老板压枪', content: '压枪教学太实用了，从描边变成收割。', score: 4.8 }
    ]
  },
  {
    id: 'j003',
    avatar: 'https://picsum.photos/200?random=23',
    nickname: '地图行者',
    price: 50,
    unit: '小时',
    orderCount: 1560,
    rating: 4.7,
    tags: ['地图全掌握', '点位分析', '路线规划'],
    honor: '🗺️ 活地图',
    intro: '对三角洲全地图倒背如流，每个角落的战术价值了如指掌。教你如何利用地形优势取胜。',
    reviews: [
      { userName: '老板路痴', content: '终于不再迷路了，地图行者名不虚传。', score: 4.8 },
      { userName: '老板地图', content: '学完才知道自己以前有多瞎打。', score: 4.6 },
      { userName: '老版点位', content: '每个点位讲解都很细致，实操性强。', score: 4.7 }
    ]
  },
  {
    id: 'j004',
    avatar: 'https://picsum.photos/200?random=24',
    nickname: '反应特训官',
    price: 45,
    unit: '小时',
    orderCount: 980,
    rating: 4.5,
    tags: ['反应训练', '手眼协调', '基础打磨'],
    honor: '⚡ 反应力教练',
    intro: '专注基础能力提升，通过科学训练方法提高反应速度和瞄准精度。适合想要突破瓶颈的玩家。',
    reviews: [
      { userName: '老板瓶颈', content: '卡在黄金上不去，特训两周直接上钻石。', score: 4.6 },
      { userName: '老板手残', content: '以前以为是自己手残，原来只是没练对。', score: 4.5 },
      { userName: '老板进步', content: '训练方法很科学，进步肉眼可见。', score: 4.4 }
    ]
  },
  {
    id: 'j005',
    avatar: 'https://picsum.photos/200?random=25',
    nickname: '战术分析师',
    price: 65,
    unit: '小时',
    orderCount: 1230,
    rating: 5.0,
    tags: ['专业复盘', '数据驱动', '职业级'],
    honor: '📊 数据大师',
    intro: '用数据说话，每一局都有详细的数据分析报告。职业级别的复盘能力，帮你找到最细微的问题。',
    reviews: [
      { userName: '老板数据', content: '每局结束都有数据分析，专业得像个教练团队。', score: 5.0 },
      { userName: '老板职业', content: '冲着职业化体验来的，超出预期。', score: 5.0 },
      { userName: '老板分析师', content: '自己也是做分析的，这水平确实专业。', score: 5.0 }
    ]
  },
  {
    id: 'j006',
    avatar: 'https://picsum.photos/200?random=26',
    nickname: '突击教官',
    price: 48,
    unit: '小时',
    orderCount: 2780,
    rating: 4.6,
    tags: ['进攻战术', '突破技巧', '实战演练'],
    honor: '🎯 进攻先锋',
    intro: '专注进攻端教学，各种突破路线和进攻时机把控。教你做战场上最锋利的刀。',
    reviews: [
      { userName: '老板进攻', content: '学会进攻节奏后，游戏体验完全不一样了。', score: 4.7 },
      { userName: '老板突击', content: '以前总是缩着打，现在敢冲了。', score: 4.5 },
      { userName: '老板冲锋', content: '教官说冲就冲，赢多输少。', score: 4.6 }
    ]
  },
  {
    id: 'j007',
    avatar: 'https://picsum.photos/200?random=27',
    nickname: '意识流导师',
    price: 55,
    unit: '小时',
    orderCount: 1450,
    rating: 4.8,
    tags: ['游戏意识', '预判训练', '大局观'],
    honor: '🧠 意识天花板',
    intro: '枪法可以练，意识需要悟。帮你建立顶级的游戏意识，预判敌人的每一步。',
    reviews: [
      { userName: '老板顿悟', content: '感觉自己突然开窍了，原来意识这么重要。', score: 4.9 },
      { userName: '老板觉醒', content: '导师一句话"对面这时候肯定在B点"，然后真的在。', score: 4.8 },
      { userName: '老板开挂', content: '我队友以为我开挂了，其实只是意识提高了。', score: 4.7 }
    ]
  },
  {
    id: 'j008',
    avatar: 'https://picsum.photos/200?random=28',
    nickname: '全能特训官',
    price: 58,
    unit: '小时',
    orderCount: 2100,
    rating: 4.7,
    tags: ['综合训练', '定制计划', '阶段提升'],
    honor: '📋 训练规划师',
    intro: '根据你的当前水平定制专属训练计划。从枪法到意识再到战术，全面打磨。',
    reviews: [
      { userName: '老板定制', content: '量身定做的训练计划，每个阶段目标明确。', score: 4.8 },
      { userName: '老板计划', content: '按计划练了两周，感觉像是换了一个人。', score: 4.7 },
      { userName: '老板全面', content: '全面提升，没有短板才是真的强。', score: 4.6 }
    ]
  },
  {
    id: 'j009',
    avatar: 'https://picsum.photos/200?random=29',
    nickname: '残局之王',
    price: 52,
    unit: '小时',
    orderCount: 1670,
    rating: 4.8,
    tags: ['残局处理', '心理素质', '以一敌多'],
    honor: '♟️ 残局大师',
    intro: '专精残局处理，1vN是家常便饭。教你如何在绝境中保持冷静，完成不可能的翻盘。',
    reviews: [
      { userName: '老板翻盘', content: '学了三节课，自己也能打1v3了。', score: 4.9 },
      { userName: '老板绝境', content: '残局的思路太清晰了，每发子弹都有目的。', score: 4.8 },
      { userName: '老板冷静', content: '最大的收获是学会了在残局不慌。', score: 4.7 }
    ]
  }
];

// ==================== 分类映射 ====================
const categoryMap = {
  huhang: { name: '护航陪玩', icon: '🛡️', desc: '专业护航，保障撤离', list: huhangList },
  yule: { name: '娱乐陪玩', icon: '🎮', desc: '轻松上分，快乐游戏', list: yuleList },
  jishu: { name: '技术陪玩', icon: '🎯', desc: '枪刚人猛，技术教学', list: jishuList }
};

/**
 * 根据ID查找陪玩详情（会同时查找内置数据和本地入驻数据）
 * @param {string} id - 陪玩ID
 * @returns {object|null} 陪玩对象或null
 */
function getPlayerById(id) {
  // 先查内置数据
  const allLists = [...huhangList, ...yuleList, ...jishuList];
  let player = allLists.find(item => item.id === id);
  if (player) return player;

  // 再查本地入驻数据
  const localPlayers = getLocalPlayers();
  return localPlayers.find(item => item.id === id) || null;
}

/**
 * 获取所有分类入口数据（首页使用）
 * @returns {array} 分类数组
 */
function getAllCategories() {
  return [
    { type: 'huhang', name: '护航', icon: '🛡️', desc: '专业护航，保障撤离' },
    { type: 'yule', name: '娱乐陪玩', icon: '🎮', desc: '轻松上分，快乐游戏' },
    { type: 'jishu', name: '技术陪玩', icon: '🎯', desc: '枪刚人猛，技术教学' }
  ];
}

/**
 * 获取分类信息
 * @param {string} type - 分类类型
 * @returns {object} { name, icon, desc }
 */
function getCategoryInfo(type) {
  const category = categoryMap[type];
  if (!category) return { name: '未知', icon: '❓', desc: '' };
  return { name: category.name, icon: category.icon, desc: category.desc };
}

// ==================== 本地入驻打手管理 ====================

const STORAGE_KEY = 'delta_custom_players';

/**
 * 获取本地存储的入驻打手列表
 * @returns {array}
 */
function getLocalPlayers() {
  try {
    const data = wx.getStorageSync(STORAGE_KEY);
    return data || [];
  } catch (e) {
    return [];
  }
}

/**
 * 保存入驻打手到本地存储
 * @param {object} player - 打手名片数据
 * @returns {boolean} 是否保存成功
 */
function saveLocalPlayer(player) {
  try {
    const players = getLocalPlayers();
    players.push(player);
    wx.setStorageSync(STORAGE_KEY, players);
    return true;
  } catch (e) {
    console.error('保存失败:', e);
    return false;
  }
}

/**
 * 根据分类获取完整陪玩列表（内置 + 本地入驻）
 * @param {string} type - 分类类型
 * @returns {object} { name, list }
 */
function getPlayerListByType(type) {
  const category = categoryMap[type];
  if (!category) return { name: '未知分类', list: [] };

  // 内置数据
  const builtInList = [...category.list];

  // 本地入驻数据（筛选对应分类）
  const localPlayers = getLocalPlayers().filter(p => p.type === type);

  // 合并：本地入驻的排前面（最新入驻优先展示）
  return {
    name: category.name,
    list: [...localPlayers, ...builtInList]
  };
}

/**
 * 生成唯一ID
 * @returns {string}
 */
function generatePlayerId() {
  return 'local_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
}

module.exports = {
  getPlayerListByType,
  getPlayerById,
  getCategoryInfo,
  getAllCategories,
  saveLocalPlayer,
  getLocalPlayers,
  generatePlayerId,
  categoryMap
};
