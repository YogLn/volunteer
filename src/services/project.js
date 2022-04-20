import request from './request'

export function addActivityReq(data) {
  return request({
    url: '/activity/register',
    method: 'POST',
    data
  })
}

export function joinActivityReq(data) {
  return request({
    url: '/enroll/register',
    method: 'POST',
    data
  })
}

export function getActivityListReq() {
  return request({
    url: '/activity/list'
  })
}

export function getActivityDetailReq(activityId) {
  return request({
    url: `/activity/get/${activityId}`
  })
}

export function searchActivityReq(keywords) {
  return request({
    url: `/activity/search`,
    params: {
      keywords
    }
  })
}

export function getActivityInfoReq(enrollId) {
  return request({
    url: `/enroll/get/${enrollId}`
  })
}

export function getActivityFilterReq(data) {
  return request({
    url: `/activity/filter`,
    method: 'POST',
    data
  })
}
