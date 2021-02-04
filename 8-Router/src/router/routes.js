import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Projeto Futebol/MftSectionBanner'
import News from '../components/Projeto Futebol/MftSectionNews'
import Notice from '@/components/Projeto Futebol/MftSectionNewsNotice' 

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        component: News
    }, {
        path: '/notice',
        component: Notice
    }]
})