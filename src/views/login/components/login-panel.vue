<template>
  <div class="login-panel">
    <h1 class="text">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="top: 2px; right: 2px"><UserFilled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <!-- 账号登录输入框组件 -->
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="top: 2px; right: 2px"><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <!-- 手机登录输入框组件 -->
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码?</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handlerLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 字体图标
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    // 2.定义方法
    const handlerLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.phoneLoginAction()
        console.log('点击了手机登录')
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handlerLoginClick
    }
  },
  components: {
    UserFilled,
    Iphone,
    LoginAccount,
    LoginPhone
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;

  .text {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    height: 40px;
  }
}
</style>
