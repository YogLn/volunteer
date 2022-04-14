import {
  getUserInfoRequest,
  getMyTeamListRequest,
  getMyActivityListRequest,
  getMyTeamListReq,
  getMyReportReq,
  getMyServeReq
} from '@/services/user'

const userModel = {
  namespaced: true,
  state() {
    return {
      myInfo: {},
      myTeam: [],
      myActivity: [],
      myCreate: [],
      myReport: [],
      serveList: []
    }
  },
  getters: {},
  mutations: {
    changeMyInfo(state, userInfo) {
      state.myInfo = userInfo
    },
    changeMyTeam(state, myTeam) {
      state.myTeam = myTeam
    },
    changeMyActivity(state, myActivity) {
      state.myActivity = myActivity
    },
    changeMyTeamList(state, myCreate) {
      state.myCreate = myCreate
    },
    changeMyReportList(state, myReport) {
      state.myReport = myReport
    },
    changeMyServeList(state, serveList) {
      state.serveList = serveList
    }
  },
  actions: {
    async getMyInfoAction({ commit }, payload) {
      const { data: res } = await getUserInfoRequest(payload)
      commit('changeMyInfo', res)
    },
    async getMyTeamListAction({ commit }) {
      const { data } = await getMyTeamListRequest()
      commit('changeMyTeam', data)
    },
    async getMyActivityListAction({ commit }) {
      const { data } = await getMyActivityListRequest()
      commit('changeMyActivity', data)
    },
    async getMyTeamAction({ commit }) {
      const { data } = await getMyTeamListReq()
      commit('changeMyTeamList', data)
    },
    async getMyReportListAction({ commit }) {
      const { data } = await getMyReportReq()
      commit('changeMyReportList', data)
    },
    async getMyServeListAction({ commit }) {
      const { data } = await getMyServeReq()
      commit('changeMyServeList', data)
    }
  }
}

export default userModel
