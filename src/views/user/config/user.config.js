export const tableContentConfig = {
  propList: [
    { prop: 'name', label: '项目名称', minWidth: '130' },
    { prop: 'address', label: '项目地点' },
    { prop: 'type', label: '项目类型', minWidth: '150', slotName: 'type' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { label: '操作', minWidth: '140', slotName: 'handler' }
  ]
}
export const TeamTableContentConfig = {
  propList: [
    { prop: 'teamName', label: '团队名称', minWidth: '130' },
    {
      prop: 'account',
      label: '联系电话',
      minWidth: '150',
      slotName: 'account'
    },
    {
      prop: 'serveArea',
      label: '服务地区',
      minWidth: '180',
      slotName: 'serveArea'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
export const reportTableContentConfig = {
  propList: [
    { prop: 'content', label: '举报内容', minWidth: '130' },
    {
      prop: 'reportStatus',
      label: '举报状态',
      minWidth: '150',
      slotName: 'reportStatus'
    },
    {
      prop: 'createDate',
      label: '时间',
      minWidth: '180',
      slotName: 'createDate'
    },
    { label: '操作', minWidth: '150', slotName: 'handler' }
  ]
}
