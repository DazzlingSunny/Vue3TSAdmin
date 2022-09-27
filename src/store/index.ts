import { createStore } from 'vuex'
import type { IRootState } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      counter: 10
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
})

export default store
