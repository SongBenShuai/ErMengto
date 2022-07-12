import request from '@/utils/request'

/**
 * 获取验证码接口
 * @returns
 */

const getCaptcha = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}
/**
 * 登录接口
 * @param {Object} data
 * @returns
 */
const getLogin = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST',
    data
  })
}

/**
 * 用户信息
 * @returns
 */
const getInfo = () => {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}

/**
 * 菜单数据
 * @returns
 */
const getNav = () => {
  return request({
    url: '/menu/nav',
    method: 'GET'
  })
}
export default { getCaptcha, getLogin, getInfo, getNav }
