import { request, downloadFile } from '@/api/service'

export const urlPrefix = '/api/system/user/'

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

export function exportData(params) {
  return downloadFile({
    url: urlPrefix + 'export/',
    params: params,
    method: 'post'
  })
}
