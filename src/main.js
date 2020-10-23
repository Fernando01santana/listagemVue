import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

var axios = require('axios');
axios.get('http://localhost/entrevista/axios/').then((response)=>{
  /* exported app */
 var numbers = response.data;
 console.log(numbers);
})