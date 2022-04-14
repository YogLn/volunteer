export const checkMobile = (rule, value, cb) => {
	// 验证手机号的正则表达式
	const regMobile = /^1[3|4|5|7|8|9][0-9]{9}$/
	if (regMobile.test(value)) {
		return cb()
	}
	cb(new Error('请输入合法的手机号'))
}

export const checkIdentity = (rule, value, cb) => {
	const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
	if (reg.test(value)) {
		return cb()
	}
	cb(new Error('请输入合法的身份证号'))
}