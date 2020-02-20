import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/pages/login/login.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Login }
    ]
})