import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import './main.scss'
import { store } from './store/store'
import { router } from './router/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})