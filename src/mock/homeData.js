import { Random } from 'mockjs'
const publicPath = process.env.BASE_URL
export function getdata(option) {
  // 定义请求数据方法
  const datalist = []
  for (let i = 0; i < 5; i += 1) {
    const o = {
      // mockjs模拟随机生成数据，生成20条
      recipeId: Random.guid(),
      cfirst: Random.url(),
      increment: Random.increment(), // 数字递加
      email: Random.email(),
      billId: Random.string(10),
      orgId: Random.string('number', 8, 10),
      Date: Random.date('yyyy-MM-dd'),
      time: Random.time('A HH:mm:ss'),
      adress: Random.county(), // 市
      viewName: Random.cword(4, 16), // 随机生成任意名称
      personName: Random.cname(),
      reason: Random.csentence(10, 32),
      isactive: Random.boolean(),
      title: Random.ctitle(),
      image2: Random.dataImage('200x100', Random.string(10)),
      image: Random.image('200x100', '#00405d', '#FFF', 'Mock.js'),
      image1: publicPath + '/img/goods/g' + 1 + '.webp',
      iid: 'goods' + i
    }
    datalist.push(o)
  }
  return {
    datalist: datalist
  }
}
export function getdata2(option) {
  // 定义请求数据方法
  const data = [
    {
      page: 0,
      list: [
        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(40),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },
        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: publicPath + '/img/goods/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        }
      ]
    }
  ]
  return data
}
export function getdata1(option) {
  // 定义请求数据方法

  const o = {
    columns: [
      '销量' + Random.string('number', 1, 3),
      '收藏' + Random.string('number', 1, 3) + '人',
      '默认快递'
    ],
    detailInfo: {
      desc: '产品介绍' + Random.cword(20, 32),
      detailImage: [
        {
          anchor: 'module_img',
          desc: '',
          key: '穿着效果',
          list: [
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10))
          ]
        },
        {
          anchor: Random.word(8),
          desc: '描述' + Random.cword(30),
          key: '包装展示',
          list: [
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10))
          ]
        },
        {
          anchor: Random.word(8),
          desc: '描述' + Random.cword(30),
          key: '服务说明',
          list: [
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10))
          ]
        }
      ]
    },
    itemInfo: {},
    itemParams: {
      info: { anchor: Random.word(8), key: '产品参数', set: {} },
      rule: {
        anchor: Random.word(8),
        disclamer: '以上尺寸为实物人工测量，因测量当时不同会有1-2cm的误差，相关数据只做参考'
      },
      tables: [
        ['尺寸', 'M适合95-110斤|'],
        ['臀围', 'M适合95-110斤|'],
        ['腰围', 'M适合95-110斤|']
      ]
    },
    rate: {
      cRate: Random.string('number', 1, 5),
      list: [{ content: '评论' + Random.cword(8, 100), created: Random.string('number', 10) }]
    },
    shopInfo: {
      allGoodsUrl: Random.url(),
      cFans: Random.string('number', 5),
      cGoods: Random.string('number', 3, 5),
      cSells: Random.string('number', 6),
      categorigs: [{}, {}, {}, {}, {}, {}],
      isMarked: Random.boolean(),
      level: Random.string('number', 1),
      name: Random.cword(2, 5),
      score: [
        { isBetter: Random.boolean(), name: '描述相符', score: 4.64 },
        { isBetter: Random.boolean(), name: '价格合理', score: 5 },
        { isBetter: Random.boolean(), name: '质量满意', score: 4.43 }
      ],
      servivices: [{}, {}, {}, {}, {}],
      shopId: Random.string(6),
      shopLogo: Random.image('100x100', 'Logo'),
      shopUrl: Random.url(),
      type: Random.increment(),
      userId: Random.string(6)
    },
    skuInfo: {},
    topBar: {}
  }
  const datalist = o
  return {
    datalist: datalist
  }
}
export function hometarbar() {
  const o = [
    { title: '首页', image1: publicPath + '/img/tarbar/tb1.png', image2: publicPath + '/img/tarbar/tb2.png' },
    { title: '商城', image1: publicPath + '/img/tarbar/tb3.png', image2: publicPath + '/img/tarbar/tb4.png' },
    { title: '优惠', image1: publicPath + '/img/tarbar/tb5.png', image2: publicPath + '/img/tarbar/tb6.png' },
    { title: '个人中心', image1: publicPath + '/img/tarbar/tb7.png', image2: publicPath + '/img/tarbar/tb8.png' }
  ]
  return o
}
export function homeswiper() {
  const o = {
    homeSwiper: [
      publicPath + '/img/homeswiper/hw0.jpg',
      publicPath + '/img/homeswiper/hw1.jpg',
      publicPath + '/img/homeswiper/hw2.jpg',
      publicPath + '/img/homeswiper/hw3.png',
      publicPath + '/img/homeswiper/hw4.png',
      publicPath + '/img/homeswiper/hw5.jpg'
    ],
    homeRecommend: [
      { images: publicPath + '/img/recommend/hr0.png', title: '话费充值' },
      { images: publicPath + '/img/recommend/hr1.png', title: '流量充值' },
      { images: publicPath + '/img/recommend/hr2.png', title: '账单查询' },
      { images: publicPath + '/img/recommend/hr3.png', title: '套餐余量' },
      { images: publicPath + '/img/recommend/hr4.png', title: '已订业务' },
      { images: publicPath + '/img/recommend/hr5.png', title: '国漫专区' },
      { images: publicPath + '/img/recommend/hr6.png', title: '5G专区' },
      { images: publicPath + '/img/recommend/hr7.png', title: '买手机' },
      { images: publicPath + '/img/recommend/hr8.png', title: '办业务' },
      { images: publicPath + '/img/recommend/hr9.png', title: '选靓号' }
    ],
    familyJoin: {
      title: '全家享',
      goods: [
        { tedian: '宽带装新', h2: '家居必备', image: publicPath + '/img/familyjion/fi0.png' },
        { tedian: '全国亲情网', h2: '成员多至19人', image: publicPath + '/img/familyjion/fi1.png' }
      ]
    },
    phone: {
      title: '终端推荐',
      color: '#fd4c82',
      goods: [
        { price: 1899, name: '华为畅享20Pro', image: publicPath + '/img/phone/ph0.png' },
        { price: 3598, name: 'vivo iQOO7', image: publicPath + '/img/phone/ph1.png' },
        { price: 2900, name: '华为畅享20Pro', image: publicPath + '/img/phone/ph2.png' },
        { price: 1344, name: 'vivo iQOO7', image: publicPath + '/img/phone/ph3.png' }
      ]
    },
    business: {
      title: '业务推荐',
      color: '#9832ff',
      more: '更多业务',
      goods: [
        { dis: '月末流量包', dis1: '月末流量救急', image: publicPath + '/img/feature/bus0.png' },
        { dis: '流量小时套餐', dis1: '流量救急', image: publicPath + '/img/feature/bus0.png' }
      ]
    },
    phoneNumber: {
      title: '号卡推荐',
      color: '#23b3e9',
      goods: [
        { images: publicPath + '/img/recommend/hr1.png', p1: '4G专区', p2: '移动4G就是快' },
        { images: publicPath + '/img/recommend/hr2.png', p1: 'VoLTE专区', p2: '4G视频通话服务' }
      ],
      recommend: [{ images: publicPath + '/img/recommend/hr0.png', p1: '4G靓号', p2: '号码随心选' }]
    },
    feature: {
      title: '特色专区',
      color: '#117dea',
      goods: [
        { p1: '国际 / 港澳台', p2: '畅游各地不断网', images: publicPath + '/img/recommend/hr0.png' },
        { p1: '活动专区', p2: '用户福利全在这里', images: publicPath + '/img/recommend/hr1.png' },
        { p1: '宽带专区', p2: '百兆宽带优惠享', images: publicPath + '/img/recommend/hr2.png' },
        { p1: '手机病毒预警', p2: '保护个人信息安全', images: publicPath + '/img/recommend/hr3.png' },
        { p1: '5G专区', p2: '5G时代看移动', images: publicPath + '/img/recommend/hr4.png' },
        { p1: '资费专区', p2: '自由选择，随心组合', images: publicPath + '/img/recommend/hr5.png' },
        { p1: '流量可选包', p2: '便捷您为先，服务在', images: publicPath + '/img/recommend/hr6.png' },
        { p1: '月末流量包', p2: '两档任您选', images: publicPath + '/img/recommend/hr7.png' }
      ]
    },
    favourite: {
      title: '猜你喜欢',
      color: '#e40077',
      goods: [
        { p1: '百度包9元15GB', p2: '', image: publicPath + '/img/favourite/fav0.png' },
        { p1: '自选套餐- 彩信包', p2: '', image: publicPath + '/img/favourite/fav1.png' },
        { p1: '气象预报', p2: '', image: publicPath + '/img/favourite/fav2.png' },
        {
          p1: '【移动商城】一加 OnePlus 8 Pro 5G手机',
          p2: '承诺在网24个月 信用购机至高优惠4180元',
          image: publicPath + '/img/favourite/fav3.png'
        },
        {
          p1: '【全球通优惠购】iPhone 12 Pro 5G全网通',
          p2: '全球通客户承诺在网6个月购机优惠500元',
          image: publicPath + '/img/favourite/fav4.png'
        },
        {
          p1: '【移动商城】iPhone 12 Pro Max 公开版',
          p2: '承诺在网6个月购机',
          image: publicPath + '/img/favourite/fav5.png'
        }
      ]
    }
  }
  return o
}
export function discounts() {
  const o = {
    header: '优惠',
    title: '欢迎来到中国移动掌上营业厅',
    goods: [
      { image: publicPath + '/img/discounts/discounts1.jpg', title: '5G靓号重磅上线' },
      { image: publicPath + '/img/discounts/discounts2.jpg', title: '超100款APP免流' },
      { image: publicPath + '/img/discounts/discounts3.jpg', title: '孝心卡' },
      { image: publicPath + '/img/discounts/discounts4.jpg', title: '动感地带M' },
      { image: publicPath + '/img/discounts/discounts5.jpg', title: '动感地带Xback卡' },
      { image: publicPath + '/img/discounts/discounts6.jpg', title: '宽带一键报装' },
      { image: publicPath + '/img/discounts/discounts7.jpg', title: '浏览页面抽大奖！' },
      { image: publicPath + '/img/discounts/discounts8.jpg', title: '您的积分使用了吗？' },
      { image: publicPath + '/img/discounts/discounts9.jpg', title: '夏日积分嘉年华' },
      { image: publicPath + '/img/discounts/discounts10.jpg', title: '原来这就是快乐星球' },
      { image: publicPath + '/img/discounts/discounts11.jpg', title: '全球通卡路里大作战' },
      { image: publicPath + '/img/discounts/discounts12.jpg', title: '积分兑话费' },
      { image: publicPath + '/img/discounts/discounts13.jpg', title: '高效办公，音乐随行' },
      { image: publicPath + '/img/discounts/discounts14.jpg', title: '全网独家！权威上新！' },
      { image: publicPath + '/img/discounts/discounts15.jpg', title: '美食有礼，开通就领' },
      { image: publicPath + '/img/discounts/discounts16.jpg', title: '和粉答人' },
      { image: publicPath + '/img/discounts/discounts17.jpg', title: '0.6元/天开学特惠' },
      { image: publicPath + '/img/discounts/discounts18.jpg', title: '爱奇艺首月1分钱' },
      { image: publicPath + '/img/discounts/discounts19.jpg', title: '奇闻妙趣学古诗' },
      { image: publicPath + '/img/discounts/discounts20.jpg', title: '健康权益0元随心领' },
      { image: publicPath + '/img/discounts/discounts21.jpg', title: '儿童诗词群英会开启！' },
      { image: publicPath + '/img/discounts/discounts22.jpg', title: '网课随心选五一送礼' },
      { image: publicPath + '/img/discounts/discounts23.jpg', title: '欢迎来到中国移动掌上营业厅去登录' },
      { image: publicPath + '/img/discounts/discounts24.jpg', title: '首月1分起免流追剧' },
      { image: publicPath + '/img/discounts/discounts25.jpg', title: '首月1分起免流追剧' },
      { image: publicPath + '/img/discounts/discounts26.jpg', title: '1元随心追剧' },
      { image: publicPath + '/img/discounts/discounts27.jpg', title: '金秋特惠放大招' },
      { image: publicPath + '/img/discounts/discounts28.jpg', title: '腾讯视频1分钱购' },
      { image: publicPath + '/img/discounts/discounts29.jpg', title: '优酷视频1分购' },
      { image: publicPath + '/img/discounts/discounts30.jpg', title: '阿里系专属流量来啦！' },
      { image: publicPath + '/img/discounts/discounts31.jpg', title: '免流畅玩哔哩哔哩！' },
      { image: publicPath + '/img/discounts/discounts32.jpg', title: '百度爱奇艺流量包来啦' }
    ]
  }
  return o
}
