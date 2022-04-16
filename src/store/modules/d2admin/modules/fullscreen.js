import screenfull from 'screenfull'

export default {
  namespaced: true,
  state: {
    active: false
  },
  actions: {
    /**
     * @description 初始化监听
     * @param {Object} context
     */
    listen({ commit }) {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          if (!screenfull.isFullscreen) commit('set', false)
        })
      }
    },
    toggle({ commit }) {
      if (screenfull.isFullscreen) {
        screenfull.exit()
        commit('set', false)
      } else {
        screenfull.request()
        commit('set', true)
      }
    }
  },
  mutations: {
    /**
     * @description 设置 store 里的全屏状态
     * @param {Object} state state
     * @param {Boolean} active active
     */
    set(state, active) {
      state.active = active
    }
  }
}
