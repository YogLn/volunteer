import request from './request'

export function addReportReq(data) {
  return request({
    url: '/report/register',
    method: 'POST',
    data
  })
}
export function deleteReportReq(reportId) {
  return request({
    url: `/report/delete/${reportId}`,
    method: 'DELETE'
  })
}
