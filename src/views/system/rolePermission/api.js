/*
 * @文件介绍: 角色管理接口
 */
import { request } from '@/api/service'

export const urlPrefix = '/api/system/role/'

export function GetList(query) {
  return request({
    url: urlPrefix,
    method: 'get',
    params: query
  }).then(res => {
    return res.data.data
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

// 通过角色id,获取菜单数据
export function GetMenuData(obj) {
  return request({
    url: '/api/system/role/roleId_get_menu/' + obj.id + '/',
    method: 'get',
    params: {}
  }).then(res => {
    // 将列表数据转换为树形数据
    return res.data.data
  })
}
