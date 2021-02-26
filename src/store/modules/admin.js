// initial state
const state = {
  adminDemo: 'adminDemo'
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  // 设置所有的文章列表
  SET_ADMIN_DEMO(state, data) {
    state.adminDemo = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
