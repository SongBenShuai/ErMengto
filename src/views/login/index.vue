<template>
  <div id="login">
    <div>
      <p class="header-text">智慧服务平台</p>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="form" class="login-form">
      <p class="form-text">欢迎登陆</p>
      <el-form-item prop="username">
        <el-input
          v-model.trim="ruleForm.username"
          placeholder="请输入账号"
          suffix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          clearable
          show-password
          v-model.trim="ruleForm.password"
          placeholder="请输入密码"
          suffix-icon="el-icon-s-goods"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div class="inputcode">
          <el-input
            v-model.trim="ruleForm.code"
            placeholder="请输入验证码"
          ></el-input>
          <el-image @click.stop="handleCodeRefresh" :src="codeImageUrl" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-button"
          :loading="loading"
          @click="handlForm"
          type="danger"
          >{{ loading ? '登录中...' : '立即登录' }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import rules from './rules'
import API from '../../api/user'
/**辅助函数
 */
// import { mapActions } from 'vuex'
export default {
  data() {
    return {
      // loading加载状态
      loading: false,
      // 表单数据
      ruleForm: {
        username: 'duck',
        password: 'admin888',
        code: '',
        token: ''
      },
      // 表单效验
      rules: rules,

      // 验证码路径
      codeImageUrl: ''
    }
  },
  methods: {
    /** 获取验证码
     */
    async handlCaptch() {
      const { captchaImg, token } = await API.getCaptcha()
      this.codeImageUrl = captchaImg
      this.ruleForm.token = token
    },
    /** 验证码刷新
     */
    handlCodefesh() {
      this.ruleForm.code = ''
      this.handlCaptch()
    },
    /**表单校验
     */
    handlForm() {
      // console.log(this.$refs['form'])
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.handleVerifyForm()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    /**登录接口
     */
    async handleVerifyForm() {
      try {
        this.loading = true
        const token = await this.$store.dispatch('user/login', this.ruleForm)
        if (!token) return
        this.$notify({
          title: '提示',
          message: '登录成功',
          type: 'success'
        })
        await this.$router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
    //  辅助函数
    // ...mapActions({
    //   login: 'user/login'
    // })
  },
  created() {
    this.handlCaptch()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  background: url('https://img1.baidu.com/it/u=1961388850,3828480377&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800')
    no-repeat fixed center;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  .header-text {
    margin-top: 50px;
    font-size: 40px;
    color: #fff;
    letter-spacing: 5px;
  }
  .el-form {
    width: 270px;
    height: 300px;
    // background-color: aqua;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -135px;

    .form-text {
      font-size: 25px;
      color: #fff;
      margin-bottom: 20px;
      text-align: left;
    }
    .inputcode {
      width: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.login-form {
  margin: 10% auto 13%;
  width: 20%;
}
.el-image {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.login-button {
  width: 100%;
  border-radius: 5px;
}

.el-form-item {
  border-radius: 5px;
}
</style>
