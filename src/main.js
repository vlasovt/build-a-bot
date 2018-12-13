import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import salepinDirective from './shared/salepin-directive';
import currencyFilter from './shared/currency-filter';

Vue.config.productionTip = false;
Vue.directive('salepin', salepinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
