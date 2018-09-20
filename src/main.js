import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import home from './pages/home/Home.vue';
import 'normalize.css';
import 'swiper/dist/css/swiper.css';
import 'styles/global.styl';

Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  render: h => h(home),
});

const loadFunc = () => {
  // const { clientWidth: clientWth } = document.documentElement;
  // const clw = clientWth < 780 ? clientWth : 780;
  // document.documentElement.style.fontSize = `${clw / 10}px`;
  document.documentElement.style.fontSize = '50px';
};

document.addEventListener('DOMContentLoaded', loadFunc, false);
