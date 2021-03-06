
import { request } from '@/api/service'
import XEUtils from 'xe-utils'

export const urlPrefix = '/api/system/menu/'

export function GetList(query) {
  query.limit = 999
  return request({
    url: urlPrefix,
    method: 'get',
    params: { ...query, limit: 999 }
  }).then(res => {
    // 将列表数据转换为树形数据
    res.data.data = XEUtils.toArrayTree(res.data.data, { parentKey: 'parent', strict: false })
    return res
  })
}

export function createObj(obj) {
  return request({
    url: urlPrefix,
    method: 'post',
    data: obj
  })
}

export function UpdateObj(obj) {
  return request({
    url: urlPrefix + obj.id + '/',
    method: 'put',
    data: obj
  })
}

export function DelObj(id) {
  return request({
    url: urlPrefix + id + '/',
    method: 'delete',
    data: { id }
  })
}
