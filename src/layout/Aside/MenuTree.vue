<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-submenu :index="item.path" v-for="item in list" :key="item.path">
        <template slot="title">{{ item.label }}</template>
        <el-menu-item
          :index="item.children.path"
          v-for="i in item.children"
          :key="i.path"
          >{{ i.label }}</el-menu-item
        > -->
      <Item></Item>
      <!-- </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    Item: () => import('./item.vue')
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
