<template>
  <div class="wrapper">
    <header>
      <div class="">
        <!-- <a class="iconfont left">&#xe61c;</a> -->
        <a class="left">123</a>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <img src="" alt="">
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl';
.wrapper
  header
    background-color $header-color
    height pxtorem(44)
    line-height pxtorem(44)
    clear both
    div
      display inline-block
    .left
      color #fff
      padding pxtorem(10)
      height pxtorem(44)
</style>