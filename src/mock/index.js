// import { random } from 'core-js/core/number'
import Mock from 'mockjs' // 引入mockjs，npm已安装

import { getdata, getdata1, getdata2, hometarbar, homeswiper, discounts } from './homeData'
import { store } from './storeData'

Mock.setup({
  timeout: '200-600' // 设置请求延时时间
})

Mock.mock('/home/multidata', /post|get/i, getdata) // 调用模拟数据方法
for (let i = 0; i < 44; i++) {
  Mock.mock('/home/goods' + i, /post|get/i, getdata1)
}
Mock.mock('/home/detail/recommend', /post|get/i, getdata2)
Mock.mock('/maintarbar', /post|get/i, hometarbar)
Mock.mock('/home/homeswiper', /post|get/i, homeswiper)
Mock.mock('/discounts', /post|get/i, discounts)
Mock.mock('/store', /post|get/i, store)
