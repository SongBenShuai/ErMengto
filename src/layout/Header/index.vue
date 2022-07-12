<template>
  <div class="info">
    <div class="info-right">
      <el-avatar src="data.avatar"></el-avatar>
      <el-dropdown trigger="click" style="cursor: pointer">
        <span class="el-dropdown-link">
          {{ data.username }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" split-button>
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item @click.native="logote">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import API from '../../api/user'
export default {
  data() {
    return {
      loading: false,
      data: {
        avatar: '',
        username: ''
      }
    }
  },
  methods: {
    async getInfo() {
      try {
        this.loading = true
        const data = await API.getInfo()
        this.data.username = data.username
        this.data.avatar = data.avatar
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    logote() {
      try {
        this.loading = true
        this.$notify({
          title: '提示',
          message: '正在退出...',
          type: 'success'
        })
        this.$store.dispatch('user/logout')
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.getInfo()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.info-right {
  width: 150px;
  display: flex;
  align-items: center;
  float: right;

  .el-avatar {
    margin-right: 10px;
  }
  .el-dropdown-link {
    font-size: 20px;
    color: aliceblue;
  }
}
</style>
