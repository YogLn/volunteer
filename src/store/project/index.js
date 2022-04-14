import {
  getActivityListReq,
  getActivityDetailReq,
  searchActivityReq
} from '@/services/project'

const projectModel = {
  namespaced: true,
  state() {
    return {
      projectList: [],
      currentProject: {}
    }
  },
  getters: {},
  mutations: {
    changeProjectList(state, projectList) {
      state.projectList = projectList
    },
    changeCurrentProject(state, currentProject) {
      state.currentProject = currentProject
    }
  },
  actions: {
    async getProjectListAction({ commit }) {
      const { data } = await getActivityListReq()
      commit('changeProjectList', data)
    },
    async getCurrentProjectAction({ commit }, payload) {
      const { data } = await getActivityDetailReq(payload)
      commit('changeCurrentProject', data)
    },
    async searchAction({ commit }, payload) {
      const { data } = await searchActivityReq(payload)
      commit('changeProjectList', data)
    }
  }
}

export default projectModel
