<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">
  <div class="wrapper">
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
      </div>
      <div class="desc">景点门票</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" alt="">
      </div>
      <div class="desc">文化古迹</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="">
      </div>
      <div class="desc">一日游</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png" alt="">
      </div>
      <div class="desc">游乐场</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png" alt="">
      </div>
      <div class="desc">夏日玩水</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png" alt="">
      </div>
      <div class="desc">夫子庙</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png" alt="">
      </div>
      <div class="desc">总统府</div>
    </div>
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" alt="">
      </div>
      <div class="desc">中山陵</div>
    </div>
  </div>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="wrapper">
    <div>
      <div class="img-content">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
      </div>
      <div class="desc">景点门票</div>
    </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination1" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: true,
        // autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination1',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-current',
        },
      },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'

.swiper-box
  >>> .swiper-pagination-bullet
    height pxtorem(6)
    width pxtorem(6)
  >>> .swiper-pagination-current
    background $header-color
    opacity 1
  .swiper-pagination1
    height pxtorem(30)
    display flex
    justify-content center
    align-items center
    border-bottom 1px solid red
    
.wrapper {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  padding-top: pxtorem(5);

  >div {
    width: 25%;
    height: pxtorem(80);
    // border 1px solid red
    box-sizing: border-box;
    padding-top: pxtorem(5);
    position: relative;
    text-align: center;

    .img-content {
      height: pxtorem(55);

      img {
        width: pxtorem(55);
        height: 100%;
      }
    }

    .desc {
      width: 100%;
      margin-top: pxtorem(5);
      line-height: 1;
      ecllipse()
    }
  }
}
</style>