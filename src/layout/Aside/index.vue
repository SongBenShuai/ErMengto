<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i :class="'el-icon-' + list.icon"></i>
        {{ list.label }}</el-menu-item
      >

      <el-submenu index="1">
        <template slot="title">
          <i :class="'el-icon-' + data.icon"></i>
          {{ data.label }}</template
        >
        <el-menu-item-group v-for="(item, index) in data.children" :key="index">
          <el-menu-item :index="item.path">
            <i :class="'el-icon-' + item.icon"></i>
            {{ item.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import API from '../../api/user'
export default {
  data() {
    return {
      loading: true,
      list: [],
      data: []
    }
  },
  methods: {
    async getNavList() {
      try {
        this.loading = true
        const data = await API.getNav()
        this.list = data.menus[0]
        this.data = data.menus[1]
        console.log(this.list)
        console.log(this.data)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.getNavList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-menu{
  border:none
}
</style>
