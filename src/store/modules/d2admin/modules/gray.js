export default {
  namespaced: true,
  state: {
    active: false
  },
  mutations: {
    toggle(state) {
      state.active = !state.active
    },
    set(state, active) {
      state.active = active
    }
  }
}
