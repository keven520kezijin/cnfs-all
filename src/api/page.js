import fetch from '@/utils/request'

/**
* 首页
* ===================================================================
*/

// 新闻列表
export function getNewsList(params) {
  const url = '/cnfs-platform/information/getAll'
  return fetch.post(url, params || {}, 'json')
}

// 新闻详情
export function getNewsDetail(params) {
  const url = '/cnfs-platform/information/getInformationDetail'
  return fetch.get(url, params || {})
}

/**
* 城市合伙人
* ===================================================================
*/

// 跑马灯
export function getlistbypage(params) {
  const url = '/cnfs-platform/marquee/getAll'
  return fetch.post(url, params || {}, 'json')
}

// 城市合伙人列表
export function getprovincelist(params) {
  const url = '/cnfs-platform/platform/getAllProvinceCooper'
  return fetch.post(url, params || {}, 'json')
}

// 提交申请
export function submitApply(params) {
  const url = '/cnfs-platform/cooperation/add'
  return fetch.post(url, params || {}, 'json')
}

// 显示指定省市的合伙人
export function getpartenerbyprovince(params) {
  const url = '/cnfs-platform/platform/getAllCityCooperByProvince'
  return fetch.post(url, params || {}, 'json')
}
