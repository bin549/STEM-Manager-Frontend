import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const frameIn = [{
  path: '/',
  redirect: { name: 'index' },
  component: layoutHeaderAside,
  children: [
    {
      path: 'index',
      name: 'index',
      meta: {
        auth: true
      },
      component: _import('dashboard/workbench/index')
    },
    {
      path: 'userInfo',
      name: 'userInfo',
      meta: {
        title: '个人信息',
        auth: true
      },
      component: () => import('@/layout/header-aside/components/header-user/userinfo')
    },
    {
      path: 'workbench',
      name: 'workbench',
      meta: {
        title: '工作台',
        auth: true
      },
      component: _import('dashboard/workbench')
    },
    {
      path: 'menu',
      name: 'menu',
      meta: {
        title: '菜单',
        auth: true
      },
      component: _import('system/menu')
    },
    // {
    //   path: 'user',
    //   name: 'user',
    //   meta: {
    //     title: '用户',
    //     auth: true
    //   },
    //   component: _import('system/user')
    // },
    {
      path: 'button',
      name: 'button',
      meta: {
        title: '按钮',
        auth: true
      },
      component: _import('system/button')
    },
    {
      path: 'menuButton/:id',
      name: 'menuButton',
      meta: {
        title: '菜单按钮',
        auth: true
      },
      component: _import('system/menuButton')
    },
    // // 系统 角色管理
    // {
    //   path: 'role',
    //   name: 'role',
    //   meta: {
    //     title: '角色',
    //     auth: true
    //   },
    //   component: _import('system/role')
    // },
    // // 系统 角色权限
    // {
    //   path: 'rolePermission',
    //   name: 'rolePermission',
    //   meta: {
    //     title: '权限管理',
    //     auth: true
    //   },
    //   component: _import('system/rolePermission')
    // },

    // // 系统 角色管理
    // {
    //   path: 'dept',
    //   name: 'dept',
    //   meta: {
    //     title: '部门',
    //     auth: true
    //   },
    //   component: _import('system/dept')
    // },
    {
      path: 'operationLog',
      name: 'operationLog',
      meta: {
        title: '操作日志',
        auth: true
      },
      component: _import('system/log/operationLog')
    },
    {
      path: 'frontendLog',
      name: 'frontendLog',
      meta: {
        title: '前端日志',
        auth: true
      },
      component: _import('system/log/frontendLog')
    },
    {
      path: 'refresh',
      name: 'refresh',
      hidden: true,
      component: _import('system/function/refresh')
    },
    {
      path: 'redirect/:route*',
      name: 'redirect',
      hidden: true,
      component: _import('system/function/redirect')
    },
    {
      path: 'course/:route*',
      name: 'course',
      meta: {
        title: 'course',
        auth: true
      },
      hidden: true,
      component: _import('course/index')
    },
    {
      path: 'message/:route*',
      name: 'message',
      meta: {
        title: '留言管理',
        auth: true
      },
      hidden: true,
      component: _import('message/index')
    }
  ]
}]


const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

const errorPage = [{
  path: '*',
  name: '404',
  component: _import('system/error/404')
}]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
