import { request } from '@/api/service'

export const urlPrefix = '/api/message/'

export function fetchList(query) {
  return request({
    url: urlPrefix,
    method: 'get',
    params: query
  })
}
export function createObj(obj) {
  return request({
    url: urlPrefix,
    method: 'post',
    data: obj
  })
}

export function updateObj(obj) {
  return request({
    url: urlPrefix + obj.id + '/',
    method: 'put',
    data: obj
  })
}

export function deleteObj(id) {
  return request({
    url: urlPrefix + id + '/',
    method: 'delete',
    data: { id }
  })
}
