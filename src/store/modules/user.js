import Api from '@/api/user'
import { setItem, getItem, removeAllItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    info: {},
    navList: {}
  },
  mutations: {
    settoken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setInfo(state, info) {
      state.token = info
      setItem('info', info)
    },
    setNav(state, navList) {
      state.navList = navList
      setItem('navList', navList)
    }
  },
  actions: {
    async login({ commit }, ruleForm) {
      const token = await Api.getLogin(ruleForm)
      commit('settoken', token)

      return token
    },

    async getuserInfo({ commit }) {
      const response = await Api.getInfo()
      commit('setInfo', response)
      return response
    },

    async getNav({ commit }) {
      const response = await Api.getNav()
      // console.log(response)
      commit('setNav', response)
      return response
    },
    logout() {
      removeAllItem('token')
      removeAllItem('info')
      removeAllItem('navList')
    }
  }
}
