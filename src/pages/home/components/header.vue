<template>
    <header>
      <div class="left">
        <a class="iconfont">&#xe61c;</a>
      </div>
      <div class="mid">
        <span class="iconfont">&#xe653;</span>
        <span>输入城市/景点</span>
      </div>
      <div class="right">
        <span>南京</span>
        <span class="iconfont">&#xe6b5;</span>
      </div>
    </header>
</template>

<script>
export default {
  name: 'travelHeader',
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl';

header 
  background-color: $header-color;
  height: pxtorem(44);
  line-height: pxtorem(44);
  clear: both;
  color: #fff;
  display: flex;
  .left
    height: 100%;
    padding-left: pxtorem(8.25);
    padding-right: pxtorem(8.25);
    width: pxtorem(40)
    box-sizing border-box
  .mid
    flex 1
    background #fff
    margin pxtorem(7) 0
    border-radius pxtorem(3)
    color #e4e7ea
    line-height pxtorem(30)
    padding-left pxtorem(10)
    .iconfont
      font-size 16px
  .right
    float right
    padding-right pxtorem(13)
    padding-left pxtorem(11)
    .iconfont
      margin-left pxtorem(-4)

</style>