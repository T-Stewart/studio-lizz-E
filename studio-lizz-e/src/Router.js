import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => { return import ('./views/Home.vue') }
        },
        {
            path: '/about',
            name: 'about',
            component: () => { return import ('./views/About.vue') }
        },
        {
            path: '/commisions',
            name: 'commisions',
            component: () => { return import ('./views/Commisions.vue') }
        },
           {
            path: '/services',
            name: 'services',
            component: () => { return import ('./views/Services.vue') }
        },
           {
            path: '/contact',
            name: 'contact',
            component: () => { return import ('./views/Contact.vue') }
        }
    ]
})