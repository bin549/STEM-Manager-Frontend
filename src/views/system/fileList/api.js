/*
 * @文件介绍: 文件管理
 */

import { request } from '@/api/service'

export const urlPrefix = '/api/system/file/'

export function GetList(query) {
  return request({
    url: urlPrefix,
    method: 'get',
    params: query
  })
}

export function AddObj(obj) {
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
