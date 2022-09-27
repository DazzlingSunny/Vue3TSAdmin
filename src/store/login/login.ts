import { Module } from 'vuex'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAcion', payload)
    }
  }
}

export default loginModule
