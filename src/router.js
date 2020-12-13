import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Mom from './views/Mom'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/mom', component: Mom }
    ]
});