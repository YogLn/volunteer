import request from './request'

export const userRegisterRequest = data => {
  return request({
    url: '/user/register',
    method: 'POST',
    data
  })
}
export const teamRegisterRequest = data => {
  return request({
    url: '/team/register',
    method: 'POST',
    data
  })
}

export const loginRequest = data => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}
