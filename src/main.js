import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
