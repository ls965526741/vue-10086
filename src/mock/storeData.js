const publicPath = process.env.BASE_URL
export function store() {
  const o = {
    swiper: [
      { image: publicPath + '/img/store/swiper/sswp2.png' },
      { image: publicPath + '/img/store/swiper/sswp3.png' },
      { image: publicPath + '/img/store/swiper/sswp4.png' },
      { image: publicPath + '/img/store/swiper/sswp5.png' },
      { image: publicPath + '/img/store/swiper/sswp6.png' }
    ],
    recommend: [
      { image: publicPath + '/img/store/recommend/sre1.png', title: '充值交费' },
      { image: publicPath + '/img/store/recommend/sre2.png', title: '我的账单' },
      { image: publicPath + '/img/store/recommend/sre3.png', title: '套餐余量' },
      { image: publicPath + '/img/store/recommend/sre4.png', title: '已订业务' },
      { image: publicPath + '/img/store/recommend/sre5.png', title: '充流量' },
      { image: publicPath + '/img/store/recommend/sre6.png', title: '办号卡' },
      { image: publicPath + '/img/store/recommend/sre7.png', title: '个人中心' },
      { image: publicPath + '/img/store/recommend/sre8.png', title: '优惠专区' }
    ],
    sel: {
      title: '办套餐',
      color: '#ffea00',
      goods: [
        { image: publicPath + '/img/store/sel/ssle1.png', p1: '全球通无限尊享套餐', p2: '三档选择' },
        { image: publicPath + '/img/store/sel/ssle2.png', p1: '全球通畅享套餐', p2: '办套餐' },
        { image: publicPath + '/img/store/sel/ssle3.png', p1: '月末流量包', p2: '月享超大流量' },
        { image: publicPath + '/img/store/sel/ssle4.png', p1: '流量可选包', p2: '10元2GB' }
      ]
    },
    sphone: {
      title: '买手机',
      color: '#46c900',
      goods: [
        { image: publicPath + '/img/store/phone/sphone1.png', p1: 'iPhone 1...', p2: '5G手机', price: '¥5399' },
        {
          image: publicPath + '/img/store/phone/sphone2.png',
          p1: 'Redmi K3...',
          p2: 'Redmi K30 ...',
          price: '¥1599'
        },
        {
          image: publicPath + '/img/store/phone/sphone3.png',
          p1: '苹果12ProM...',
          p2: '5G手机',
          price: '¥8699'
        },
        { image: publicPath + '/img/store/phone/sphone4.png', p1: 'OPPO A93', p2: '5G手机', price: '¥1649' }
      ]
    },
    business: {
      title: '办业务',
      color: '#0167c9',
      goods: [
        { image: publicPath + '/img/store/images/image1.png', p1: '流量小时包', p2: '4小时有效' },
        { image: publicPath + '/img/store/images/image2.png', p1: '流量日包', p2: '3元1G起' },
        { image: publicPath + '/img/store/images/image1.png', p1: '月末流量包', p2: '月末流量救急' },
        { image: publicPath + '/img/store/images/image2.png', p1: '夜间流量包', p2: '夜间上网也放心' }
      ]
    },
    selnum: {
      title: '选号码',
      color: '#9e00b9',
      goods: [
        { image: publicPath + '/img/store/selectnumber/ssnum1.png' },
        { image: publicPath + '/img/store/selectnumber/ssnum2.png' },
        { image: publicPath + '/img/store/selectnumber/ssnum3.png' }
      ]
    },
    accessories: {
      title: ' 挑配件',
      color: '#ff9e02',
      goods: [
        {
          image: publicPath + '/img/store/images/peijian1.png',
          p1: '华为Mini蓝牙音箱',
          p2: '迷你小音箱',
          price: '¥99'
        },
        {
          image: publicPath + '/img/store/images/peijian2.png',
          p1: '和目智能锁',
          p2: '防盗门电子门锁',
          price: '¥699'
        }
      ]
    }
  }
  return o
}
