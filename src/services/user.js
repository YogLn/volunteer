import request from './request'

export const getUserInfoRequest = userId => {
  return request({
    url: `/user/get/${userId}`
  })
}

export const updateInfoRequest = data => {
  return request({
    url: `/user/update`,
    method: 'PUT',
    data
  })
}

// 获取我参加的团队
export const getMyTeamListRequest = () => {
  return request({
    url: `/enrollTeam/myteam`
  })
}

// 获取我参加的活动
export const getMyActivityListRequest = () => {
  return request({
    url: `/enroll/my`
  })
}

// 退出团队
export function outTeamReq(teamId) {
  return request({
    url: `/enrollTeam/quit`,
    method: 'DELETE',
    params: {
      teamId
    }
  })
}
// 退出活动
export function outActivityReq(enrollId) {
  return request({
    url: `/enroll/delete/${enrollId}`,
    method: 'POST'
  })
}

// 删除活动
export function deleteActivityReq(activityId) {
  return request({
    url: `/activity/delete/${activityId}`,
    method: 'DELETE'
  })
}

export function getMyTeamListReq() {
  return request({
    url: '/team/myteam'
  })
}

// 解散团体
export function disbandReq(teamId) {
  return request({
    url: `/team/delete/${teamId}`,
    method: 'DELETE'
  })
}
// 我的举报
export function getMyReportReq() {
  return request({
    url: `/report/my`
  })
}
// 我的时长
export function getMyServeReq() {
  return request({
    url: `/user/myserve`
  })
}

// 我的团项目
export function getMyCreateProjectListReq() {
  return request({
    url: `/activity/mylist`
  })
}
