import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect: '/home',
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home/home.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/favor',
            component: () =>
                import ('@/views/favor/favor.vue')
        },
        {
            path: '/order',
            component: () =>
                import ('@/views/order/order.vue')
        },
        {
            path: '/message',
            component: () =>
                import ('@/views/message/message.vue'),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/city',
            component: () =>
                import ('@/views/city/city.vue'),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/search',
            component: () =>
                import ('@/views/search/search.vue'),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/detail/:id',
            component: () =>
                import ('@/views/detail/detail.vue'),

        },

    ]
})

export default router