import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);

const app = Vue.extend(App);
const router = new VueRouter({
  linkActiveClass: 'active',
});
router.map({
  '/goods': {
    component: goods,
  },
  '/ratings': {
    component: ratings,
  },
  '/seller': {
    component: seller,
  },
});
router.start(app, '#app');
router.go('/goods');
