import { loginRequest } from '@/services/register'
import router from '@/router'
import { ElMessage } from 'element-plus'

const loginModel = {
  namespaced: true,
  // 存储的数据
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  // 修改数据
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  // 异步操作，发起请求
  actions: {
    async loginAction({ commit }, payload) {
      try {
        const { data: res } = await loginRequest(payload)
        commit('changeToken', res.token)
        commit('changeUserInfo', res.userinfo)
        // 设置token的过期时间进行存储
        let obj = {
          data: res.token,
          time: Date.now(),
          expire: 86400000
        }
        // 将token和用户信息存入本地
        window.localStorage.setItem('token', JSON.stringify(obj))
        window.localStorage.setItem('userInfo', JSON.stringify(res.userinfo))
        ElMessage({
          message: '登录成功~',
          type: 'success'
        })
        router.push('/home')
      } catch (error) {
        console.log(error)
        ElMessage({
          message: '登录失败~用户名或密码错误',
          type: 'error'
        })
      }
    },
    // 通过该函判断token是否过期，并拿到数据
    loadDataAction({ commit }) {
      const token = JSON.parse(window.localStorage.getItem('token'))
      if (!token) return
      if (Date.now() - token.time > token.expire) {
        window.localStorage.clear()
        return
      }
      commit('changeToken', token.data)
      const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      if (userInfo) commit('changeUserInfo', userInfo)
    }
  }
}

export default loginModel
