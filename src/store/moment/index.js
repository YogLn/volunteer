import {
  getArticleListReq,
  getArticleDetailReq,
  getCommentListReq
} from '@/services/moment'

const articleModel = {
  namespaced: true,
  state() {
    return {
      articleUserList: [],
      articleTeamList: [],
      currentMoment: {},
      commentList: []
    }
  },
  getters: {},
  mutations: {
    changeArticleUserList(state, articleUserList) {
      state.articleUserList = articleUserList
    },
    changeArticleTeamList(state, articleTeamList) {
      state.articleTeamList = articleTeamList
    },
    changeCurrentMomentAction(state, currentMoment) {
      state.currentMoment = currentMoment
    },
    changeCommentList(state, commentList) {
      state.commentList = commentList
    }
  },
  actions: {
    async getArticleListAction({ commit }, payload) {
      const { data } = await getArticleListReq(payload)
      if (payload === 1) {
        commit('changeArticleUserList', data)
      } else {
        commit('changeArticleTeamList', data)
      }
    },
    async getMomentDetailAction({ commit }, payload) {
      const { data } = await getArticleDetailReq(payload)
      commit('changeCurrentMomentAction', data)
    },
    async getCommentListAction({ commit }, payload) {
      const { data } = await getCommentListReq(payload)
      commit('changeCommentList', data)
    }
  }
}

export default articleModel
