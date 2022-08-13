
import code from '@/mock/code'
import Mock from 'mockjs'
import banner from './banner.json'
import cart from './cart.json'
import cartCheck from './cartCheck'
import cartDel from './cartDel.json'
import cartList from './cartList.json'
import detail from './detail.json'
import floor from './floor.json'
import login from './login.json'
import register from './register'
import search from './search.json'
import userInfo from './userInfo.json'

Mock.mock('/mock/banner', {code:200, data:banner})
Mock.mock('/mock/floor', {code:200, data:floor})
Mock.mock('/mock/search', { code: 200, data: search })
Mock.mock('/mock/detail', { code: 200, data: detail })
Mock.mock(/\/mock\/cart\/addToCart\/\d+\/\d+/, {code:200, data: cart})
Mock.mock('/mock/cart/cartList', {code:200, data: cartList})
Mock.mock(/\/mock\/cart\/checkCart\/\d+\/\w+/, { code: 200, data: cartCheck })
Mock.mock(/\/mock\/cart\/deleteCart\/\d+/, { code: 200, data: cartDel })

// 请求注册用户
Mock.mock('/mock/user/passport/register', {code:200, data: register})

// 获取手机验证码
Mock.mock(/\/mock\/user\/passport\/sendCode\/\d+/, {code:200, data:code})


// 用户login
Mock.mock('/mock/user/passport/login', {code:200, data:login})


// 通过token获取userInfo
Mock.mock('/mock/user/passport/auth/getUserInfo', {code:200, data:userInfo})

// https://github.com/nuysoft/Mock/wiki/Mock.mock()  文档
// /\/domain\/list\.json/
