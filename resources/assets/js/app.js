require('./bootstrap');

window.Vue = require('vue');
const N3Components = require('N3-components');

Vue.use(N3Components, 'en');

Vue.component('dotlan-map', require('./components/Map.vue'));

const app = new Vue({
    el: '#app'
});
