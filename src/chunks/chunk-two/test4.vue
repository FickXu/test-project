<style scoped>
@import '../../public/css/style1.css';
</style>
<template>
  <div class="card">
    <div class="item">this is page Four</div>
  </div>
</template>
<script>
import FF from '../../public/js/FF'
import Top3 from '../../public/js/Top3'
export default {
  name: 'Four',
  mounted () {
    FF()
    Top3()
    this.console()
  },
  methods: {
    console () {
      console.log('this is page test4')
    }
  }
}
</script>