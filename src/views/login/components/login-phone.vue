<template>
  <div>
    <el-form
      label-width="65px"
      :rules="rules"
      :model="phone"
      ref="phoneFormRef"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="captcha">
        <!-- 往input的插槽中插入内容 -->
        <div class="get-code">
          <el-input v-model="phone.captcha"></el-input>
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const phone = reactive({
      num: '',
      captcha: ''
    })
    const phoneFormRef = ref<InstanceType<typeof ElForm>>()

    const rules = {
      num: [
        {
          required: true,
          message: '手机号码不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^1[3-9]\d{9}$/,
          message: '手机号码格式错误',
          trigger: 'blur'
        }
      ],
      captcha: [
        {
          required: true,
          message: '验证码不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^\d{6}$/,
          message: '验证码错误',
          trigger: 'blur'
        }
      ]
    }

    const phoneLoginAction = () => {
      phoneFormRef.value?.validate((validate) => {
        if (validate) {
          console.log('手机验证成功')

          store.dispatch('login/phoneLoginAction', phone)
        }
      })
    }

    const acquireCode = () => {
      console.log('发送验证码')
    }

    return {
      phone,
      rules,
      phoneFormRef,
      acquireCode,
      phoneLoginAction
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .get-code-btn {
    margin-left: 8px;
  }
}
</style>
