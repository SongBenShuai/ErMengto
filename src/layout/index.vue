<template>
  <div id="layout">
    <el-container>
      <el-aside width="200px">
        <AppAside> </AppAside>
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader></AppHeader>
        </el-header>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/layout/Aside'
import AppMain from '@/layout/Main'
import AppHeader from '@/layout/Header'
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    AppAside,
    AppMain,
    AppHeader
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#layout{
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #18bc9c;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #222d32;
  color: #333;
}

.el-main {
  background-color: #ccc;
  color: #333;
}
</style>
