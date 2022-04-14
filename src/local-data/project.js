export const rules = {
  name: [{ required: true, message: '请输入活动名称~', trigger: 'blur' }],
  address: [{ required: true, message: '请输入活动地点~', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入活动描述~', trigger: 'blur' }],
  startDatetime: [
    { required: true, message: '请选择活动开始时间~', trigger: 'blur' }
  ],
  endDatetime: [
    { required: true, message: '请选择活动结束时间~', trigger: 'blur' }
  ],
  recruitNumber: [
    { required: true, message: '请输入招募人数~', trigger: 'blur' }
  ],
  recruitStatus: [
    { required: true, message: '请选择招募状态~', trigger: 'blur' }
  ],
  teamId: [{ required: true, message: '请选团队~', trigger: 'blur' }],
  type: [{ required: true, message: '请选择服务类型~', trigger: 'blur' }]
}
