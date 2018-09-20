<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1809/b4/7101381b7b2c0702.jpg_750x200_b8da41bf.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1809/ce/bca92895556c5002.jpg_750x200_cf56d46c.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1809/c0/78ef8cca6ca40c02.jpg_750x200_1461bca2.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
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
          el: '.swiper-pagination',
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
.swiper-box
  width: 100%;
  height: pxtorem(100)
  margin: 0 auto
  &.swiper-container-horizontal
    .swiper-pagination-bullets
      bottom pxtorem(6)
  .swiper-item 
    height: 100%
    text-align: center
    font-size: 18px 
    background: #e4e4e4
    display: flex
    justify-content: center
    align-items: center
    .swiper-img
      width 100%
  >>> .swiper-pagination-bullet
    width pxtorem(6);
    height: pxtorem(6);
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
  >>> .swiper-pagination-current
    background #fff
    opacity 1
</style>