import request from './request'

export function getArticleListReq(publishby) {
  return request({
    url: '/article/list',
    params: {
      publishby
    }
  })
}

export function getArticleDetailReq(articleId) {
  return request({
    url: `/article/get/${articleId}`
  })
}

export function addComment(data) {
  return request({
    url: '/comment/register',
    method: 'POST',
    data
  })
}

// 文章评论
export function getCommentListReq(articleId) {
  return request({
    url: `/comment/article/${articleId}`
  })
}
