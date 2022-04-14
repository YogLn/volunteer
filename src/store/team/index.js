import {
  getTeamListReq,
  getTeamDetailReq,
  searchTeamReq
} from '@/services/team'

const articleModel = {
  namespaced: true,
  state() {
    return {
      teamList: [],
      currentTeam: {}
    }
  },
  getters: {},
  mutations: {
    changeTeamList(state, teamList) {
      state.teamList = teamList
    },
    changeCurrentTeam(state, currentTeam) {
      state.currentTeam = currentTeam
    }
  },
  actions: {
    async getTeamListAction({ commit }) {
      const { data } = await getTeamListReq()
      commit('changeTeamList', data)
    },

    async getTeamDetailAction({ commit }, payload) {
      const { data } = await getTeamDetailReq(payload)
      commit('changeCurrentTeam', data)
    },

    async searchTeamReqAction({ commit }, payload) {
      const { data } = await searchTeamReq(payload)
      commit('changeTeamList', data)
    }
  }
}

export default articleModel
