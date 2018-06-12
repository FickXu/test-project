<style scoped>
</style>
<template>
  <div class="card" @click="to">
   <div class="item">(click me)this url is: {{url}}</div>
  </div>
</template>
<script>
export default {
  name: 'testpage',
  data() {
      return {
          url: '/test',
          index: 0
      }
  },
  methods: {
    to () {
      this.index++
      this.url += '/' + this.index
      this.$router.push({'path': this.url, component: 'TestPage'})
    }
  },
  beforeRouteUpdate(to, from, next) {
      this.url = to.path
      console.log(to, from)
      next()
  }
}
</script>