<template>
  <div>
    <travelHeader></travelHeader>
    <travelSwiper></travelSwiper>
    <travelCategories></travelCategories>
  </div>
</template>

<script>

import travelHeader from './components/header.vue';
import travelSwiper from './components/swiper.vue';
import travelCategories from './components/categories.vue';

export default {
  name: 'home',
  components: {
    travelHeader,
    travelSwiper,
    travelCategories,
  },
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
</style>