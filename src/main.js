import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import 'styles/global.styl';

new Vue({
  el: '#app',
  render: h => h(App),
});

const loadFunc = () => {
  const { clientWidth: clientWth } = document.documentElement;
  const clw = clientWth < 780 ? clientWth : 780;
  document.documentElement.style.fontSize = `${clw / 10}px`;
};

document.addEventListener('DOMContentLoaded', loadFunc, false);
