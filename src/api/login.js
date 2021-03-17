import fetch from '@/utils/request'

// 手机验证码
export function sendSMS(params) {
  const url = '/cnfs-platform/sms/register'
  return fetch.post(url, params || {})
}

// 注册
export function userRegister(params) {
  const url = '/cnfs-platform/userin/phoneRegister'
  return fetch.post(url, params || {}, 'json')
}

// 登录
export function login(params) {
  const url = '/cnfs-platform/userin/phoneLogin'
  return fetch.post(url, params || {}, 'json')
}

// 退出登录
export function loginout(params) {
  const url = '/cnfs-platform/userin/loginout'
  return fetch.get(url, params || {})
}

// 忘记密码
export function findPassword(params) {
  const url = '/cnfs-platform/userin/phoneUpdatePass'
  return fetch.post(url, params || {}, 'json')
}