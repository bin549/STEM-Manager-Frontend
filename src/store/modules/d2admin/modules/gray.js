export default {
  namespaced: true,
  state: {
    active: false
  },
  mutations: {
    /**
     * @description 切换灰度状态
     * @param {Object} state state
     */
    toggle(state) {
      state.active = !state.active
    },
    /**
     * @description 设置灰度模式
     * @param {Object} state state
     * @param {Boolean} active active
     */
    set(state, active) {
      state.active = active
    }
  }
}
