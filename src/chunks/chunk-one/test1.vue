<style lang=""<style lang="less" scoped>
@import '../../public/css/style1.css';
</style>
<template>
  <div class="card">
    <div class="item">this is page one</div>
  </div>
</template>
<script scoped>
import Top3 from '../../public/js/Top3'
export default {
  name: 'One',
  mounted () {
    Top3()
    this.console()
  },
  methods: {
    console () {
      console.log('this is page test1')
    }
  }
}
</script>

