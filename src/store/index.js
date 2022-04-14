import { createStore } from 'vuex'
import login from './login'
import user from './user'
import team from './team'
import moment from './moment'
import project from './project'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    user,
    team,
    moment,
    project
  }
})

export function setupStore() {
  store.dispatch('login/loadDataAction')
}

export default store
