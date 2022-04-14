import { checkMobile, checkIdentity } from '@/utils/validate'

export const serveType = [
  '赛会服务',
  '应急救援',
  '城市运行',
  '文化教育',
  '关爱服务',
  '社区服务',
  '绿色环保',
  '医疗卫生',
  '其他'
]

export const rules = {
  username: [{ required: true, message: '请输入用户名~', trigger: 'blur' }],
  account: [
    { required: true, message: '请输入手机号~', trigger: 'blur' },
    { validator: checkMobile, trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码~', trigger: 'blur' },
    { min: 6, message: '密码不得少于6位', trigger: 'blur' }
  ],
  serveArea: [{ required: true, message: '请选择服务区域~', trigger: 'blur' }],
  identity: [
    { required: true, message: '请输入合法身份证号~', trigger: 'blur' },
    { validator: checkIdentity, trigger: 'blur' }
  ],
  serveType: [{ required: true, message: '请选择服务类型~', trigger: 'blur' }]
}
