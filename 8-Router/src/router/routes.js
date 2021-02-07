import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Projeto Futebol/MftSectionBanner'
import News from '../components/Projeto Futebol/MftSectionNews'
import Notice from '@/components/Projeto Futebol/MftSectionNewsNotice' 
import Mft404 from '@/components/Projeto Futebol/Mft404'
Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        alias: '/notices',
        component: News
    }, {
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice
    }, {
        path: '/admin',
        redirect: '/'
    }, {
        path: '*',
        component: Mft404
    }]
})