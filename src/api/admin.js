import fetch from '@/utils/request'

/**
* 获取省、市、区
* ===================================================================
*/

// 所有省
export function getProvince(params) {
  const url = '/cnfs-platform/cNProvince/getAll'
  return fetch.post(url, params || {})
}

// 查询对应的市
export function getAllCity(params) {
  const url = '/cnfs-platform/cNCity/getCityByProvinceCode'
  return fetch.post(url, params || {})
}

// 查询对应的区
export function getAllArea(params) {
  const url = '/cnfs-platform/cNArea/getAreaByCityCode'
  return fetch.post(url, params || {})
}