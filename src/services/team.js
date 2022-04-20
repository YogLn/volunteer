import request from './request'

export function getTeamListReq() {
  return request({
    url: '/team/list'
  })
}

export function getTeamDetailReq(teamId) {
  return request({
    url: `/team/get/${teamId}`
  })
}

export function joinTeamReq(data) {
  return request({
    url: `/enrollTeam/join`,
    method: 'POST',
    data
  })
}

export function searchTeamReq(keywords) {
  return request({
    url: `/team/search`,
    params: {
      keywords
    }
  })
}
// 获取团队成员数目
export function getTeamMemberNumReq(teamId) {
  return request({
    url: `/enrollTeam/membercount`,
    params: {
      teamId
    }
  })
}

export function teamFilterReq(data) {
  return request({
    url: `/team/filter`,
    method: 'POST',
    data
  })
}
