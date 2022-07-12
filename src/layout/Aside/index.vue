<template>
  <div>
    <menu-tree></menu-tree>
  </div>
</template>

<script>
import API from '../../api/user'
export default {
  data() {
    return {
      loading: true,
      list: []
    }
  },
  methods: {
    async getNavList() {
      try {
        this.loading = true
        const data = await API.getNav()
        this.list = data.menus
        console.log(this.list)
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
  components: {
    MenuTree: ()  => import('./MenuTree.vue')
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
