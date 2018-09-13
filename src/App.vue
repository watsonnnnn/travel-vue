<template>
  <div class="wrapper">
    <header>
      <div class="left">
        <a class="iconfont">&#xe61c;</a>
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
    color #fff
    display flex
    >div
      display inline-block
    .left
      height 100%
      padding-left .22rem
      padding-right .22rem
</style>