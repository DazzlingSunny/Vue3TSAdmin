// 编写好规则
export const rules = {
  name: [
    {
      required: true, // 是否必传
      message: '用户名是必传的内容', // 不符合规则时提示文字
      trigger: 'blur' // 使用什么事件触发规则校验
    },
    {
      pattern: /^[A-z0-9]{5,10}$/, //正则表达式
      message: '用户名必须时5-9个字母和数字组成',
      trigger: 'blur' // 使用什么事件触发规则校验
    }
  ],
  password: [
    {
      required: true, // 是否必传
      message: '密码是必传的内容', // 不符合规则时提示文字
      trigger: 'blur' // 使用什么事件触发规则校验
    },
    {
      pattern: /^[A-z0-9]{5,}$/, //正则表达式
      message: '密码必须时5位以上的字母和数字~',
      trigger: 'blur' // 使用什么事件触发规则校验
    }
  ]
}
